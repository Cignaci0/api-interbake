import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';
import { Repository } from 'typeorm';
export declare class DispositivoService {
    private readonly dispositivoRepository;
    constructor(dispositivoRepository: Repository<Dispositivo>);
    create(createDispositivoDto: CreateDispositivoDto): Promise<Dispositivo>;
    findAll(): Promise<Dispositivo[]>;
    findOne(id: number): Promise<Dispositivo | null>;
    update(id: number, updateDispositivoDto: UpdateDispositivoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
