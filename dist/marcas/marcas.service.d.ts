import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
export declare class MarcasService {
    private readonly marcasRepository;
    constructor(marcasRepository: Repository<Marca>);
    create(createMarcaDto: CreateMarcaDto): Promise<CreateMarcaDto & Marca>;
    findAll(): Promise<Marca[]>;
    findOne(id: number): Promise<Marca | null>;
    update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
