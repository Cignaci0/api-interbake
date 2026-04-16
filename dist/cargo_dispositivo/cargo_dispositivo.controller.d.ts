import { CargoDispositivoService } from './cargo_dispositivo.service';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';
export declare class CargoDispositivoController {
    private readonly cargoDispositivoService;
    constructor(cargoDispositivoService: CargoDispositivoService);
    asignacion(cargoId: number, dispositivosIds: number[]): Promise<import("./entities/cargo_dispositivo.entity").CargoDispositivo[]>;
    findAll(): Promise<{
        data: import("./entities/cargo_dispositivo.entity").CargoDispositivo[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    update(id: string, updateCargoDispositivoDto: UpdateCargoDispositivoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    buscarPorCargo(id: string): Promise<{
        cargo_id: any;
        dispositivos: any[];
    }>;
}
