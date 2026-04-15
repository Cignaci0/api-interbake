import { CargoDispositivoService } from './cargo_dispositivo.service';
import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';
export declare class CargoDispositivoController {
    private readonly cargoDispositivoService;
    constructor(cargoDispositivoService: CargoDispositivoService);
    asignacion(cargoId: number, dispositivosIds: number[]): Promise<import("./entities/cargo_dispositivo.entity").CargoDispositivo[]>;
    create(createCargoDispositivoDto: CreateCargoDispositivoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCargoDispositivoDto: UpdateCargoDispositivoDto): string;
    remove(id: string): string;
    buscarPorCargo(id: string): Promise<import("./entities/cargo_dispositivo.entity").CargoDispositivo[]>;
}
