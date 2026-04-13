import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';
export declare class CargoService {
    private readonly cargoRepository;
    constructor(cargoRepository: Repository<Cargo>);
    create(createCargoDto: CreateCargoDto): Promise<CreateCargoDto & Cargo>;
    findAll(): Promise<Cargo[]>;
    findOne(id: number): Promise<Cargo | null>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
