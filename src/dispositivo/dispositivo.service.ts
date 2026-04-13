import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.dispositivoRepository.find();
  }

  findOne(id: number) {
    return this.dispositivoRepository.findOne({ where: { dispositivo_id: id } });
  }

  update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    return this.dispositivoRepository.update(id, updateDispositivoDto);
  }

  remove(id: number) {
    return this.dispositivoRepository.delete(id);
  }
}
