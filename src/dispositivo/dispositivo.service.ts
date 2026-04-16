import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DispositivoService {
  constructor(
    @InjectRepository(Dispositivo)
    private readonly dispositivoRepository: Repository<Dispositivo>
  ) {}

  create(createDispositivoDto: CreateDispositivoDto) {
    const dispositivo = this.dispositivoRepository.create(createDispositivoDto);
    return this.dispositivoRepository.save(dispositivo);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.dispositivoRepository.findAndCount({
      order: {
        dispositivo_id: 'ASC'
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
    return this.dispositivoRepository.findOne({ where: { dispositivo_id: id } });
  }

  update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    return this.dispositivoRepository.update(id, updateDispositivoDto);
  }

  async remove(id: number) {
    const dispositivo = await this.dispositivoRepository.findOne({ where: { dispositivo_id: id } });
    if (!dispositivo) {
      throw new NotFoundException('Dispositivo no encontrado');
    }
    return this.dispositivoRepository.delete(id);
  }
}
