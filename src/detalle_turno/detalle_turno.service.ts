import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleTurnoDto } from './dto/create-detalle_turno.dto';
import { UpdateDetalleTurnoDto } from './dto/update-detalle_turno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleTurno } from './entities/detalle_turno.entity';
import { In, Repository } from 'typeorm';
import { Turno } from 'src/turno/entities/turno.entity';
import { Horario } from 'src/horario/entities/horario.entity';

@Injectable()
export class DetalleTurnoService {

  constructor(
    @InjectRepository(DetalleTurno)
    private readonly detalleTurnoRepository: Repository<DetalleTurno>,
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,
  ) {}

  create(createDetalleTurnoDto: CreateDetalleTurnoDto) {
    return 'This action adds a new detalleTurno';
  }

  findAll() {
    return `This action returns all detalleTurno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleTurno`;
  }

  update(id: number, updateDetalleTurnoDto: UpdateDetalleTurnoDto) {
    return `This action updates a #${id} detalleTurno`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleTurno`;
  }

  async asignacionDetalleTurno(
    turnoId: number,
    codDias: number[],
    idsHorarios: number[],
  ) {
    // Validar que ambos arrays tengan el mismo tamaño
    if (codDias.length !== idsHorarios.length) {
      throw new NotFoundException(
        `La cantidad de cod_dia (${codDias.length}) y horario_id (${idsHorarios.length}) deben ser iguales.`,
      );
    }

    // 1. Verificar si existe el turno
    const turno = await this.turnoRepository.findOne({ where: { turno_id: turnoId } });
    if (!turno) {
      throw new NotFoundException(`El turno con id ${turnoId} no fue encontrado.`);
    }

    // 2. Verificar si existen todos los horarios enviados
    const horarios = await this.horarioRepository.find({
      where: { horario_id: In(idsHorarios) },
    });

    if (horarios.length !== new Set(idsHorarios).size) {
      const idsEncontrados = horarios.map(h => h.horario_id);
      const idsFaltantes = [...new Set(idsHorarios)].filter(id => !idsEncontrados.includes(id));
      throw new NotFoundException(
        `Los siguientes ids de horario no existen: ${idsFaltantes.join(', ')}.`,
      );
    }

    // 3. Eliminar todos los registros anteriores del turno
    await this.detalleTurnoRepository.delete({ turno_id: { turno_id: turnoId } as any });

    // 4. Insertar los nuevos registros combinando cod_dia[i] con horario_id[i]
    const nuevosRegistros = codDias.map((codDia, i) =>
      this.detalleTurnoRepository.create({
        turno_id: { turno_id: turnoId } as any,
        horario_id: { horario_id: idsHorarios[i] } as any,
        cod_dia: codDia,
      }),
    );

    return await this.detalleTurnoRepository.save(nuevosRegistros);
  }
}

