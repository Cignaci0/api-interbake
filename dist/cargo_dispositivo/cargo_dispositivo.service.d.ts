import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';
import { CargoDispositivo } from './entities/cargo_dispositivo.entity';
import { Cargo } from "../cargo/entities/cargo.entity";
import { Dispositivo } from "../dispositivo/entities/dispositivo.entity";
import { Repository } from 'typeorm';
export declare class CargoDispositivoService {
    private readonly cargoDispositivoRepository;
    private readonly cargoRepository;
    private readonly dispositivoRepository;
    constructor(cargoDispositivoRepository: Repository<CargoDispositivo>, cargoRepository: Repository<Cargo>, dispositivoRepository: Repository<Dispositivo>);
    create(createCargoDispositivoDto: CreateCargoDispositivoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCargoDispositivoDto: UpdateCargoDispositivoDto): string;
    remove(id: number): string;
    asignacioCargoDispositivo(idCargo: number, idsDispositivos: number[]): Promise<CargoDispositivo[]>;
}
