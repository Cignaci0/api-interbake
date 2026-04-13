import { Injectable } from '@nestjs/common';
import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';

@Injectable()
export class CencoService {
  create(createCencoDto: CreateCencoDto) {
    return 'This action adds a new cenco';
  }

  findAll() {
    return `This action returns all cenco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cenco`;
  }

  update(id: number, updateCencoDto: UpdateCencoDto) {
    return `This action updates a #${id} cenco`;
  }

  remove(id: number) {
    return `This action removes a #${id} cenco`;
  }
}
