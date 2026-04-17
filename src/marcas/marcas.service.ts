import { HttpException, Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Between, Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { MarcasAuditoria } from 'src/marcas_auditoria/entities/marcas_auditoria.entity';
import { MailerService } from '@nestjs-modules/mailer';
import * as crypto from 'crypto';
import { Empleado } from 'src/empleado/entities/empleado.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca) private readonly marcasRepository: Repository<Marca>,
    private readonly mailerService: MailerService,
    @InjectRepository(MarcasAuditoria) private readonly marcasAuditoriaRepository: Repository<MarcasAuditoria>,
    private readonly configService: ConfigService,
  ) { }

  formatRUN(run: string): string {
    if (!run) return run;
    let runStr = run.replace(/[^0-9Kk]/g, '');
    if (runStr.length <= 1) return runStr;
    const dv = runStr.slice(-1);
    const body = runStr.slice(0, -1);
    const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedBody}-${dv}`;
  }

  async create(createMarcaDto: CreateMarcaDto) {
    if (!createMarcaDto) {
      throw new HttpException('No se proporcionaron los datos para crear la marca', 404);
    }
    const nuevaMarca = this.marcasRepository.create(createMarcaDto);

    nuevaMarca.hashcode = crypto.createHash('md5').update(JSON.stringify(nuevaMarca.evento + ';' + nuevaMarca.fecha_marca + ';' + nuevaMarca.hora_marca + ';' + nuevaMarca.num_ficha + ';' + nuevaMarca.info_adicional + ';' + nuevaMarca.comentario)).digest('hex');
    const guardar = await this.marcasRepository.save(nuevaMarca);

    if (!guardar) {
      throw new HttpException('No se pudo crear la marca', 404);
    }

    try {
      // Usamos relaciones correctas del proyecto interbake (cenco_id en vez de cenco)
      const empleadoInfo = await this.marcasRepository.manager.findOne(Empleado, {
        where: { num_ficha: nuevaMarca.num_ficha },
        relations: ['cenco_id']
      });

      if (empleadoInfo && empleadoInfo.email) {
        const correoEmpleado = empleadoInfo.email;
        const nombreEmpleado = empleadoInfo.nombres + ' ' + empleadoInfo.apellido_paterno + ' ' + empleadoInfo.apellido_materno;

        let eventoNombre = 'Marca';
        if (String(nuevaMarca.evento) === '1') eventoNombre = 'Entrada';
        if (String(nuevaMarca.evento) === '2') eventoNombre = 'Salida';

        let fMarca = nuevaMarca.fecha_marca;
        let fechaFormatString = '';
        if (fMarca instanceof Date) {
          const day = String(fMarca.getDate()).padStart(2, '0');
          const month = String(fMarca.getMonth() + 1).padStart(2, '0');
          const year = fMarca.getFullYear();
          fechaFormatString = `${day}/${month}/${year}`;
        } else if (typeof fMarca === 'string') {
          const parts = (fMarca as string).substring(0, 10).split('-');
          if (parts.length === 3) {
            fechaFormatString = `${parts[2]}/${parts[1]}/${parts[0]}`;
          } else {
            fechaFormatString = fMarca;
          }
        }

        // Estas variables no están en la entidad de empleado actual de interbake, ajustado a NO APLICA de momento
        const nombre_empresa = 'Interbake';
        const rut_empresa = '78544420-5';
        const direccion = 'ojos del salado 0851';
        const comuna = 'QUILICURA';

        await this.mailerService.sendMail({
          to: correoEmpleado,
          cc: empleadoInfo.email_noti,
          subject: 'Nueva Marca Registrada',
          html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Hola, ${nombreEmpleado}</h2>
            <p>Se ha creado una nueva marca en el sistema con los siguientes detalles:</p>
            <ul>
              <li><strong>Fecha:</strong> ${fechaFormatString}</li>
              <li><strong>Hora:</strong> ${nuevaMarca.hora_marca}</li>
              <li><strong>Run:</strong> ${this.formatRUN(empleadoInfo.run)}</li>
              <li><strong>Num ficha:</strong> ${empleadoInfo.num_ficha}</li>
              <li><strong>Nombre:</strong> ${nombreEmpleado}</li>
              <li><strong>Evento:</strong> ${eventoNombre}</li>
              <li><strong>Hashcode:</strong> ${nuevaMarca.hashcode}</li>
              <li><strong>Dirección:</strong> ${empleadoInfo.cenco_id?.direccion || 'NO APLICA'}</li>
            </ul>
            <p>Sistema exepcional de jordana: No Aplica</p>
            <p>Resolución Exenta: No Aplica</p>
            <p>Geolocalización: No Aplica</p>
            <p>Empleador:</p>
            <ul>
              <li><strong>Nombre Empresa:</strong> ${nombre_empresa}</li>
              <li><strong>Rut Empresa:</strong> ${rut_empresa}</li>
              <li><strong>Dirección Empresa:</strong> ${direccion}</li>
              <li><strong>Comuna Empresa:</strong> ${comuna}</li>
            </ul>
            <p>Empresa Transitoria o Subcontratado: NO APLICA</p>
            <p>Nombre: NO APLICA</p>
            <p>Rut: NO APLICA</p>
            <p>Si no reconoces esta marca o tienes dudas, puedes contactar al administrador.</p>
          </div>`,
        });
      }
    } catch (error) {
      console.error('Error al enviar correo de nueva marca:', error);
    }
    return { message: 'Marca creada exitosamente', data: guardar };
  }

  async findAll(numFicha: string, fechaInicio: string, fechaFin: string) {
    const busqueda = await this.marcasRepository.find({
      where: {
        num_ficha: numFicha,
        fecha_marca: Between(fechaInicio as any, fechaFin as any),
      },
      order: {
        fecha_marca: 'ASC',
      },
      relations: [
        'empleado',
        'dispositivo_id',
        'empleado.turno',
        'empleado.turno.detalle_turno',
        'empleado.turno.detalle_turno.horario_id' 
      ],
      select: {
        marca_id: true, 
        fecha_marca: true,
        hora_marca: true,
        evento: true,
        hashcode: true,
        info_adicional: true,
        comentario: true,
        empleado: {
          num_ficha: true,
          turno: {
            turno_id: true,
            detalle_turno: {
              id: true,
              cod_dia: true,
              horario_id: {
                horario_id: true,
                hora_entrada: true,
                hora_salida: true,
                holgura_mins: true,
                colacion: true,
              },
            },
          }
        },
        dispositivo_id: {
          nombre: true,
        }
      }
    });

    const result: any[] = [];
    let empleadoInfo: Empleado | null = null;

    if (busqueda.length > 0 && busqueda[0].empleado) {
      empleadoInfo = busqueda[0].empleado;
    } else {
      empleadoInfo = await this.marcasRepository.manager.findOne(Empleado, {
        where: { num_ficha: numFicha },
        relations: ['turno', 'turno.detalle_turno', 'turno.detalle_turno.horario_id']
      });
    }

    if (!empleadoInfo) {
      throw new HttpException('No se pudo encontrar el empleado', 404);
    }

    const diasTurnoQuery = await this.marcasRepository.manager.query(
      `SELECT e.turno_id, dt.cod_dia 
       FROM empleado e 
       LEFT JOIN detalle_turno dt ON dt.turno_id = e.turno_id 
       WHERE e.num_ficha = $1`,
      [numFicha]
    );

    let diasConTurno = [1, 2, 3, 4, 5, 6, 7];
    if (diasTurnoQuery && diasTurnoQuery.length > 0) {
      if (diasTurnoQuery[0].turno_id !== null) {
        diasConTurno = diasTurnoQuery.filter((row: any) => row.cod_dia !== null).map((row: any) => Number(row.cod_dia));
      }
    }

    const startParts = fechaInicio.split('-');
    const currentDate = new Date(parseInt(startParts[0]), parseInt(startParts[1]) - 1, parseInt(startParts[2]));

    const endParts = fechaFin.split('-');
    const endDate = new Date(parseInt(endParts[0]), parseInt(endParts[1]) - 1, parseInt(endParts[2]));

    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;

      let diaSemana = currentDate.getDay();
      if (diaSemana === 0) diaSemana = 7;

      const diasNombres = ['', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sá.', 'Do.'];
      const fechaFormatExt = `${diasNombres[diaSemana]} ${day}-${month}-${year}`;

      let tieneTurnoHoy = diasConTurno.includes(diaSemana);

      const marcasDelDia = busqueda.filter((m) => {
        let mDateKey = '';
        if (typeof m.fecha_marca === 'string') {
          mDateKey = (m.fecha_marca as string).substring(0, 10);
        } else if (m.fecha_marca instanceof Date) {
          const dYear = m.fecha_marca.getUTCFullYear();
          const dMonth = String(m.fecha_marca.getUTCMonth() + 1).padStart(2, '0');
          const dDay = String(m.fecha_marca.getUTCDate()).padStart(2, '0');
          mDateKey = `${dYear}-${dMonth}-${dDay}`;
        } else if (m.fecha_marca) {
          const d = new Date(m.fecha_marca);
          const dYear = d.getUTCFullYear();
          const dMonth = String(d.getUTCMonth() + 1).padStart(2, '0');
          const dDay = String(d.getUTCDate()).padStart(2, '0');
          mDateKey = `${dYear}-${dMonth}-${dDay}`;
        }
        return mDateKey === dateKey;
      });

      if (marcasDelDia.length > 0) {
        const formateadas = marcasDelDia.map(m => {
          let dtDia = empleadoInfo?.turno?.detalle_turno?.find((dt: any) => Number(dt.cod_dia) === Number(diaSemana));
          let overrideHorario = dtDia && (dtDia as any).horario_id ? (dtDia as any).horario_id : null;

          return {
            ...m,
            tieneTurno: tieneTurnoHoy,
            fecha_marca: fechaFormatExt as any,
            empleado: empleadoInfo ? {
              ...empleadoInfo,
              turno: empleadoInfo.turno ? {
                ...empleadoInfo.turno,
                detalle_turno: overrideHorario ? { horario_id: overrideHorario } : null
              } : (overrideHorario ? { detalle_turno: { horario_id: overrideHorario } } : null)
            } : null
          };
        });
        result.push(...formateadas);

        if (marcasDelDia.length === 1) {
          const marcaUnica = marcasDelDia[0];
          let infoFaltante = 'Falta Marca';
          
          if (String(marcaUnica.evento) === '1') {
            infoFaltante = 'Falta Marca Salida';
          } else if (String(marcaUnica.evento) === '2') {
            infoFaltante = 'Falta Marca Entrada';
          }

          let dtDia = empleadoInfo?.turno?.detalle_turno?.find((dt: any) => Number(dt.cod_dia) === Number(diaSemana));
          let overrideHorario = dtDia && (dtDia as any).horario_id ? (dtDia as any).horario_id : null;

          result.push({
            marca_id: null,
            fecha_marca: fechaFormatExt as any,
            hora_marca: null,
            evento: null,
            hashcode: null,
            info_adicional: infoFaltante,
            dispositivo_id: null,
            tieneTurno: tieneTurnoHoy,
            empleado: {
              num_ficha: empleadoInfo?.num_ficha,
              turno: empleadoInfo?.turno ? {
                turno_id: empleadoInfo.turno.turno_id,
                detalle_turno: overrideHorario ? { horario_id: overrideHorario } : null
              } : (overrideHorario ? { detalle_turno: { horario_id: overrideHorario } } : null)
            },
          } as any);
        }
      } else {
        let dtDia = empleadoInfo?.turno?.detalle_turno?.find((dt: any) => Number(dt.cod_dia) === Number(diaSemana));
        let infoTexto = tieneTurnoHoy ? 'Faltan ambas marcas ' : 'Día libre';

        let overrideHorario = dtDia && (dtDia as any).horario_id ? (dtDia as any).horario_id : null;

        result.push({
          marca_id: null,
          fecha_marca: fechaFormatExt as any,
          hora_marca: null,
          evento: null,
          hashcode: null,
          info_adicional: infoTexto,
          dispositivo_id: null,
          tieneTurno: tieneTurnoHoy,
          empleado: {
            num_ficha: empleadoInfo?.num_ficha,
            turno: empleadoInfo?.turno ? {
              turno_id: empleadoInfo.turno.turno_id,
              detalle_turno: overrideHorario ? { horario_id: overrideHorario } : null
            } : (overrideHorario ? { detalle_turno: { horario_id: overrideHorario } } : null)
          },
        } as any);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return result;
  }

  findOne(id: number) {
    return this.marcasRepository.findOne({ where: { marca_id: id } });
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto, usuarioActualizador: string = 'Sistema') {
    if (!updateMarcaDto || Object.keys(updateMarcaDto).length === 0) {
      throw new HttpException('No se proporcionaron los datos para actualizar la marca', 400);
    }

    const marcaOriginal = await this.marcasRepository.findOne({ where: { marca_id: id } });

    if (!marcaOriginal) {
      throw new HttpException('No se encontró la marca a actualizar', 404);
    }

    // Generamos un Token único (UUID) para los enlaces del correo
    const tokenSeguridad = crypto.randomBytes(32).toString('hex');

    // Procesamos la fecha propuesta para la auditoría
    let fechaPropuesta = updateMarcaDto.fecha_marca || marcaOriginal.fecha_marca;
    if (fechaPropuesta instanceof Date) {
      fechaPropuesta = fechaPropuesta.toISOString().substring(0, 10) as any;
    } else if (typeof fechaPropuesta === 'string') {
      fechaPropuesta = (fechaPropuesta as string).substring(0, 10) as any;
    }

    // Creamos el registro en MarcasAuditoria con estado 'Pendiente' (3)
    const marcaAuditoria = this.marcasAuditoriaRepository.create({
      marca: { marca_id: id },
      num_ficha: marcaOriginal.num_ficha,
      fecha_marca: fechaPropuesta,
      hora_marca: updateMarcaDto.hora_marca || marcaOriginal.hora_marca,
      evento: Number(updateMarcaDto.evento || marcaOriginal.evento),
      info_adicional: updateMarcaDto.info_adicional !== undefined ? updateMarcaDto.info_adicional : marcaOriginal.info_adicional,
      comentario: updateMarcaDto.comentario !== undefined ? updateMarcaDto.comentario : marcaOriginal.comentario,
      estado: 3, // Pendiente
      token: tokenSeguridad,
      datos_update: updateMarcaDto as any,
      fecha_actualizacion: new Date(),
      usuario_actualizador: usuarioActualizador
    });

    if (marcaAuditoria.fecha_actualizacion) {
      if (marcaAuditoria.fecha_actualizacion instanceof Date) {
        marcaAuditoria.fecha_actualizacion = marcaAuditoria.fecha_actualizacion.toISOString().substring(0, 19).replace('T', ' ') as any;
      }
    }

    marcaAuditoria.hashcode = crypto.createHash('md5').update(JSON.stringify(marcaAuditoria.evento + ';' + marcaAuditoria.fecha_marca + ';' + marcaAuditoria.hora_marca + ';' + marcaAuditoria.num_ficha + ';' + marcaAuditoria.info_adicional + ';' + marcaAuditoria.comentario)).digest('hex');

    const guardarAuditoria = await this.marcasAuditoriaRepository.save(marcaAuditoria);

    try {
      const empleadoInfo = await this.marcasRepository.manager.findOne(Empleado, {
        where: { num_ficha: marcaOriginal.num_ficha }, relations: ['cenco_id']
      });

      if (empleadoInfo && empleadoInfo.email) {
        const correoEmpleado = empleadoInfo.email; 
        const nombreEmpleadoCompleto = empleadoInfo.nombres + ' ' + empleadoInfo.apellido_paterno + ' ' + empleadoInfo.apellido_materno;

        let eventoNombre = 'Marca';
        if (String(marcaAuditoria.evento) === '1') eventoNombre = 'Entrada';
        if (String(marcaAuditoria.evento) === '2') eventoNombre = 'Salida';

        let fMarca = marcaAuditoria.fecha_marca;
        let fechaFormatString = '';
        if (fMarca instanceof Date) {
          const day = String(fMarca.getDate()).padStart(2, '0');
          const month = String(fMarca.getMonth() + 1).padStart(2, '0');
          const year = fMarca.getFullYear();
          fechaFormatString = `${day}/${month}/${year}`;
        } else if (typeof fMarca === 'string') {
          const parts = (fMarca as string).substring(0, 10).split('-');
          if (parts.length === 3) {
            fechaFormatString = `${parts[2]}/${parts[1]}/${parts[0]}`;
          } else {
            fechaFormatString = fMarca;
          }
        }

        const nombre_empresa = 'Interbake';
        const rut_empresa = '78544420-5';
        const direccion = 'ojos del salado 0851';
        const comuna = 'QUILICURA';

        const urlBase = this.configService.get<string>('API_URL_BASE') || 'http://localhost:3000';
        const linkAprobar = `${urlBase}/marcas/confirmar?token=${tokenSeguridad}&accion=aprobar`;
        const linkRechazar = `${urlBase}/marcas/confirmar?token=${tokenSeguridad}&accion=rechazar`;

        await this.mailerService.sendMail({
          to: correoEmpleado,
          cc: empleadoInfo.email_noti,
          subject: 'Solicitud de Modificación de Marca',
          html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Hola, ${nombreEmpleadoCompleto}</h2>
            <p>Se ha solicitado modificar una marca en el sistema con los siguientes detalles <strong>(Datos Propuestos)</strong>:</p>
            <ul>
              <li><strong>Fecha:</strong> ${fechaFormatString}</li>
              <li><strong>Hora:</strong> ${marcaAuditoria.hora_marca}</li>
              <li><strong>Run:</strong> ${this.formatRUN(empleadoInfo.run)}</li>
              <li><strong>Num ficha:</strong> ${empleadoInfo.num_ficha}</li>
              <li><strong>Nombre:</strong> ${nombreEmpleadoCompleto}</li>
              <li><strong>Evento:</strong> ${eventoNombre}</li>
              <li><strong>Hashcode:</strong> ${marcaAuditoria.hashcode}</li>
              <li><strong>Dirección:</strong> ${empleadoInfo.cenco_id?.direccion || 'NO APLICA'}</li>
            </ul>

            <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-left: 5px solid #ffc107; border-radius: 4px;">
              <p style="margin-top: 0; font-size: 16px; font-weight: bold;">¿Autorizas este cambio?</p>
              <div style="margin-top: 15px;">
                <a href="${linkAprobar}" style="background-color: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin-right: 15px; font-weight: bold; display: inline-block;">SÍ, APROBAR</a>
                <a href="${linkRechazar}" style="background-color: #dc3545; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">NO, RECHAZAR</a>
              </div>
              <p style="margin-bottom: 0; margin-top: 15px; font-size: 13px; color: #6c757d;">* Si no respondes en 48 horas, el cambio se aprobará automáticamente.</p>
            </div>

            <p>Sistema exepcional de jordana: No Aplica</p>
            <p>Resolución Exenta: No Aplica</p>
            <p>Geolocalización: No Aplica</p>
            <p>Empleador:</p>
            <ul>
              <li><strong>Nombre Empresa:</strong> ${nombre_empresa}</li>
              <li><strong>Rut Empresa:</strong> ${this.formatRUN(rut_empresa)}</li>
              <li><strong>Dirección Empresa:</strong> ${direccion}</li>
              <li><strong>Comuna Empresa:</strong> ${comuna}</li>
            </ul>
            <p>Empresa Transitoria o Subcontratado: NO APLICA</p>
            <p>Nombre: NO APLICA</p>
            <p>Rut: NO APLICA</p>
            <p>Si no reconoces esta marca o tienes dudas, puedes contactar al administrador.</p>
          </div>`,
        });
      }
    } catch (error) {
      console.error('Error al enviar correo de actualización de marca:', error);
    }

    return {
      message: 'Solicitud de modificación enviada exitosamente. El cambio está pendiente de aprobación.',
      data: guardarAuditoria
    };
  }

  async confirmarCambio(token: string, accion: string) {
    const auditoria = await this.marcasAuditoriaRepository.findOne({ 
      where: { token: token, estado: 3 },
      relations: ['marca']
    });

    if (!auditoria) {
      return `
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
          <h2 style="color: #dc3545;">Enlace Inválido</h2>
          <p>Esta solicitud ya fue procesada, expiró o el enlace es incorrecto.</p>
        </div>
      `;
    }

    if (accion === 'aprobar') {
      const idMarca = auditoria.marca?.marca_id;
      const marcaOriginal = await this.marcasRepository.findOne({ where: { marca_id: idMarca } });
      
      if (marcaOriginal) {
        Object.assign(marcaOriginal, auditoria.datos_update);
        marcaOriginal.hashcode = auditoria.hashcode; 
        await this.marcasRepository.save(marcaOriginal);
      }
      
      auditoria.estado = 1; 
    } else if (accion === 'rechazar') {
      auditoria.estado = 2; 
    }

    await this.marcasAuditoriaRepository.save(auditoria);

    const color = accion === 'aprobar' ? '#28a745' : '#dc3545';
    const mensaje = accion === 'aprobar' ? 'aprobado y aplicado' : 'rechazado';

    return `
      <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h2 style="color: ${color};">¡Proceso Exitoso!</h2>
        <p>El cambio de la marca ha sido <strong>${mensaje}</strong> correctamente.</p>
        <p>Ya puedes cerrar esta ventana.</p>
      </div>
    `;
  }

  async remove(id: number) {
    const marca = await this.marcasRepository.findOne({ where: { marca_id: id } });
    if (!marca) {
      throw new HttpException('No se encontró la marca a eliminar', 404);
    }
    const empleadoInfo = await this.marcasRepository.manager.findOne(Empleado, {
      where: { num_ficha: marca.num_ficha }, relations: ['cenco_id']
    });

    if (empleadoInfo && empleadoInfo.email) {
      const correoEmpleado = empleadoInfo.email;
      const nombreEmpleado = empleadoInfo.nombres + ' ' + empleadoInfo.apellido_paterno + ' ' + empleadoInfo.apellido_materno;

      let eventoNombre = 'Marca';
      if (String(marca.evento) === '1') eventoNombre = 'Entrada';
      if (String(marca.evento) === '2') eventoNombre = 'Salida';

      let fMarca = marca.fecha_marca;
      let fechaFormatString = '';
      if (fMarca instanceof Date) {
        const day = String(fMarca.getDate()).padStart(2, '0');
        const month = String(fMarca.getMonth() + 1).padStart(2, '0');
        const year = fMarca.getFullYear();
        fechaFormatString = `${day}/${month}/${year}`;
      } else if (typeof fMarca === 'string') {
        const parts = (fMarca as string).substring(0, 10).split('-');
        if (parts.length === 3) {
          fechaFormatString = `${parts[2]}/${parts[1]}/${parts[0]}`;
        } else {
          fechaFormatString = fMarca;
        }
      }

      const nombre_empresa = 'Interbake';
      const rut_empresa = '78544420-5';
      const direccion = 'ojos del salado 0851';
      const comuna = 'QUILICURA';

      await this.mailerService.sendMail({
        to: correoEmpleado,
        cc: empleadoInfo.email_noti,
        subject: 'Eliminacion de Marca Registrada',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Hola, ${nombreEmpleado}</h2>
            <p>Se ha eliminado una marca en el sistema con los siguientes detalles:</p>
            <ul>
              <li><strong>Fecha:</strong> ${fechaFormatString}</li>
              <li><strong>Hora:</strong> ${marca.hora_marca}</li>
              <li><strong>Run:</strong> ${this.formatRUN(empleadoInfo.run)}</li>
              <li><strong>Num ficha:</strong> ${empleadoInfo.num_ficha}</li>
              <li><strong>Nombre:</strong> ${nombreEmpleado}</li>
              <li><strong>Evento:</strong> ${eventoNombre}</li>
              <li><strong>Hashcode:</strong> ${marca.hashcode}</li>
              <li><strong>Dirección:</strong> ${empleadoInfo.cenco_id?.direccion || 'NO APLICA'}</li>
              <li><strong>Comentario:</strong> ${marca.comentario}</li>
            </ul>
            <p>Sistema exepcional de jordana: No Aplica</p>
            <p>Resolución Exenta: No Aplica</p>
            <p>Geolocalización: No Aplica</p>
            <p>Empleador:</p>
            <ul>
              <li><strong>Nombre Empresa:</strong> ${nombre_empresa}</li>
              <li><strong>Rut Empresa:</strong> ${rut_empresa}</li>
              <li><strong>Dirección Empresa:</strong> ${direccion}</li>
              <li><strong>Comuna Empresa:</strong> ${comuna}</li>
            </ul>
            <p>Empresa Transitoria o Subcontratado: NO APLICA</p>
            <p>Nombre: NO APLICA</p>
            <p>Rut: NO APLICA</p>
            <p>Si no reconoces esta marca o tienes dudas, puedes contactar al administrador.</p>
          </div>`,
      });
    }
    await this.marcasAuditoriaRepository.delete({ marca: { marca_id: id } } as any);
    return this.marcasRepository.delete(id);
  }

  @Cron(CronExpression.EVERY_HOUR)
  async procesarAprobacionesAutomaticas() {
    const hace48Horas = new Date();
    hace48Horas.setHours(hace48Horas.getHours() - 48);

    const pendientes = await this.marcasAuditoriaRepository.find({
      where: {
        estado: 3, // Pendiente
        fecha_actualizacion: Between(new Date(0) as any, hace48Horas as any)
      }
    });

    if (pendientes.length === 0) {
      console.log('No se encontraron marcas pendientes de aprobación automática.');
      return;
    }

    for (const auditoria of pendientes) {
      try {
        console.log(`Aprobando automáticamente solicitud #${auditoria.correlativo} (Token: ${auditoria.token})`);
        await this.confirmarCambio(auditoria.token, 'aprobar');
      } catch (error) {
        console.error(`Error al aprobar automáticamente la solicitud #${auditoria.correlativo}:`, error);
      }
    }
    console.log(`Se procesaron ${pendientes.length} aprobaciones automáticas.`);
  }
  
}
