import { Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorarioService {

  @InjectRepository(Horario)
  private readonly horarioRepository: Repository<Horario>

  create(createHorarioDto: CreateHorarioDto) {
    const horario = this.horarioRepository.create(createHorarioDto);
    return this.horarioRepository.save(horario);
  }

  findAll() {
    return this.horarioRepository.find();
  }

  findOne(id: number) {
    const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
    if (!horario) {
      throw new Error('Horario no encontrado');
    }
    return horario;
  }

  update(id: number, updateHorarioDto: UpdateHorarioDto) {
    const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
    if (!horario) {
      throw new Error('Horario no encontrado');
    }
    return this.horarioRepository.update(id, updateHorarioDto);
  }

  remove(id: number) {
    const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
    if (!horario) {
      throw new Error('Horario no encontrado');
    }
    return this.horarioRepository.delete(id);
  }
}
