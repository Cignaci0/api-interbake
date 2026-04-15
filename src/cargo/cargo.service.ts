import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>
  ) { }

  create(createCargoDto: CreateCargoDto) {
    return this.cargoRepository.save(createCargoDto);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.cargoRepository.findAndCount({
      order: {
        cargo_id: 'ASC'
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
    return this.cargoRepository.findOne({ where: { cargo_id: id } });
  }

  update(id: number, updateCargoDto: UpdateCargoDto) {
    return this.cargoRepository.update(id, updateCargoDto);
  }

  remove(id: number) {
    return this.cargoRepository.delete(id);
  }
}
