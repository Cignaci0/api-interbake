import { MarcasAuditoriaService } from './marcas_auditoria.service';
import { CreateMarcasAuditoriaDto } from './dto/create-marcas_auditoria.dto';
import { UpdateMarcasAuditoriaDto } from './dto/update-marcas_auditoria.dto';
export declare class MarcasAuditoriaController {
    private readonly marcasAuditoriaService;
    constructor(marcasAuditoriaService: MarcasAuditoriaService);
    create(createMarcasAuditoriaDto: CreateMarcasAuditoriaDto): string;
    findAll(idMarca: number): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateMarcasAuditoriaDto: UpdateMarcasAuditoriaDto): string;
    remove(id: string): string;
}
