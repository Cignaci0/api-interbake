import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {
  constructor(@InjectRepository(Marca) private readonly marcasRepository: Repository<Marca>) { }
  create(createMarcaDto: CreateMarcaDto) {
    return this.marcasRepository.save(createMarcaDto);
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
