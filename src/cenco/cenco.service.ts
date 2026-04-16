import { Injectable } from '@nestjs/common';
import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cenco } from './entities/cenco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CencoService {

  @InjectRepository(Cenco)
  private readonly cencoRepository: Repository<Cenco>

  create(createCencoDto: CreateCencoDto) {
    return 'This action adds a new cenco';
  }

  async findAll(page:number = 1, limit:number = 10) {
    const [data, total] = await this.cencoRepository.findAndCount({
      order: {
        cenco_id: 'ASC'
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
    return `This action returns a #${id} cenco`;
  }

  update(id: number, updateCencoDto: UpdateCencoDto) {
    return `This action updates a #${id} cenco`;
  }

  remove(id: number) {
    return `This action removes a #${id} cenco`;
  }
}
