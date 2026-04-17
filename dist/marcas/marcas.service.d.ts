import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { MarcasAuditoria } from "../marcas_auditoria/entities/marcas_auditoria.entity";
import { MailerService } from '@nestjs-modules/mailer';
export declare class MarcasService {
    private readonly marcasRepository;
    private readonly mailerService;
    private readonly marcasAuditoriaRepository;
    private readonly configService;
    constructor(marcasRepository: Repository<Marca>, mailerService: MailerService, marcasAuditoriaRepository: Repository<MarcasAuditoria>, configService: ConfigService);
    formatRUN(run: string): string;
    create(createMarcaDto: CreateMarcaDto): Promise<{
        message: string;
        data: Marca;
    }>;
    findAll(numFicha: string, fechaInicio: string, fechaFin: string): Promise<any[]>;
    findOne(id: number): Promise<Marca | null>;
    update(id: number, updateMarcaDto: UpdateMarcaDto, usuarioActualizador?: string): Promise<{
        message: string;
        data: MarcasAuditoria;
    }>;
    confirmarCambio(token: string, accion: string): Promise<string>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    procesarAprobacionesAutomaticas(): Promise<void>;
}
