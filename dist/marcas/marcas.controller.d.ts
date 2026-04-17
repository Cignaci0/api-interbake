import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
export declare class MarcasController {
    private readonly marcasService;
    constructor(marcasService: MarcasService);
    create(createMarcaDto: CreateMarcaDto): Promise<{
        message: string;
        data: import("./entities/marca.entity").Marca;
    }>;
    findAll(numFicha: string, fechaInicio: string, fechaFin: string): Promise<any[]>;
    confirmarCambio(token: string, accion: string): Promise<string>;
    findOne(id: string): Promise<import("./entities/marca.entity").Marca | null>;
    update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<{
        message: string;
        data: import("../marcas_auditoria/entities/marcas_auditoria.entity").MarcasAuditoria;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
