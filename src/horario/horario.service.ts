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

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.horarioRepository.findAndCount({
      order: {
        horario_id: 'ASC'
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
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
