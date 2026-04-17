import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
export declare class MarcasService {
    private readonly marcasRepository;
    private readonly mailerService;
    constructor(marcasRepository: Repository<Marca>, mailerService: MailerService);
    formatRUN(run: string): string;
    create(createMarcaDto: CreateMarcaDto): Promise<{
        message: string;
        data: Marca;
    }>;
    findAll(): Promise<Marca[]>;
    findOne(id: number): Promise<Marca | null>;
    update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
