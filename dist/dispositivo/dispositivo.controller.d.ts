import { DispositivoService } from './dispositivo.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
export declare class DispositivoController {
    private readonly dispositivoService;
    constructor(dispositivoService: DispositivoService);
    create(createDispositivoDto: CreateDispositivoDto): Promise<import("./entities/dispositivo.entity").Dispositivo>;
    findAll(): Promise<import("./entities/dispositivo.entity").Dispositivo[]>;
    findOne(id: string): Promise<import("./entities/dispositivo.entity").Dispositivo | null>;
    update(id: string, updateDispositivoDto: UpdateDispositivoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
