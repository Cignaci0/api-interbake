import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';
export declare class CargoDispositivoService {
    create(createCargoDispositivoDto: CreateCargoDispositivoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCargoDispositivoDto: UpdateCargoDispositivoDto): string;
    remove(id: number): string;
}
