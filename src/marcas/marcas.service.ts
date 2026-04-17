import { HttpException, Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import * as crypto from 'crypto';
import { Empleado } from 'src/empleado/entities/empleado.entity';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca) private readonly marcasRepository: Repository<Marca>,
    private readonly mailerService: MailerService,
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

  findAll() {
    return this.marcasRepository.find();
  }

  findOne(id: number) {
    return this.marcasRepository.findOne({ where: { marca_id: id } });
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcasRepository.update(id, updateMarcaDto);
  }

  remove(id: number) {
    return this.marcasRepository.delete(id);
  }
}
