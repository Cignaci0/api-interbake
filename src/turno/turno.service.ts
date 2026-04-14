import { Injectable } from '@nestjs/common';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Turno } from './entities/turno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurnoService {

  @InjectRepository(Turno)
  private readonly turnoRepository: Repository<Turno>

  create(createTurnoDto: CreateTurnoDto) {
    const turno = this.turnoRepository.create(createTurnoDto);
    return this.turnoRepository.save(turno);
  }

  findAll() {
    return this.turnoRepository.find();
  }

  findOne(id: number) {
    const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new Error('Turno no encontrado');
    }
    return turno;
  }

  update(id: number, updateTurnoDto: UpdateTurnoDto) {
    const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new Error('Turno no encontrado');
    }
    return this.turnoRepository.update(id, updateTurnoDto);
  }

  remove(id: number) {
    const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new Error('Turno no encontrado');
    }
    return this.turnoRepository.delete(id);
  }
}
