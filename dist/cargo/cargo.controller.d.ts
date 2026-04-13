import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    create(createCargoDto: CreateCargoDto): Promise<CreateCargoDto & import("./entities/cargo.entity").Cargo>;
    findAll(): Promise<import("./entities/cargo.entity").Cargo[]>;
    findOne(id: string): Promise<import("./entities/cargo.entity").Cargo | null>;
    update(id: string, updateCargoDto: UpdateCargoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
