import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.turnoRepository.findAndCount({
      order: {
        turno_id: 'ASC'
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

  async findOne(id: number) {
    const turno = await this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new NotFoundException('Turno no encontrado');
    }
    return turno;
  }

  async update(id: number, updateTurnoDto: UpdateTurnoDto) {
    const turno = await this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new NotFoundException('Turno no encontrado');
    }
    return this.turnoRepository.update(id, updateTurnoDto);
  }

  async remove(id: number) {
    const turno = await this.turnoRepository.findOne({ where: { turno_id: id } });
    if (!turno) {
      throw new NotFoundException('Turno no encontrado');
    }
    return this.turnoRepository.delete(id);
  }
}
