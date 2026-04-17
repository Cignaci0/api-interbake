import { CreateMarcasAuditoriaDto } from './dto/create-marcas_auditoria.dto';
import { UpdateMarcasAuditoriaDto } from './dto/update-marcas_auditoria.dto';
import { MarcasAuditoria } from './entities/marcas_auditoria.entity';
import { Repository } from 'typeorm';
export declare class MarcasAuditoriaService {
    private readonly marcasAuditoriaRepository;
    constructor(marcasAuditoriaRepository: Repository<MarcasAuditoria>);
    create(createMarcasAuditoriaDto: CreateMarcasAuditoriaDto): string;
    findAll(idMarca: number): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateMarcasAuditoriaDto: UpdateMarcasAuditoriaDto): string;
    remove(id: number): string;
}
