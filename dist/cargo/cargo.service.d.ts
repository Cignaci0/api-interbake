import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';
export declare class CargoService {
    private readonly cargoRepository;
    constructor(cargoRepository: Repository<Cargo>);
    create(createCargoDto: CreateCargoDto): Promise<CreateCargoDto & Cargo>;
    findAll(page?: number, limit?: number): Promise<{
        data: Cargo[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    findOne(id: number): Promise<Cargo | null>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
