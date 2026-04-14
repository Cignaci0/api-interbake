import { TurnoService } from './turno.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
export declare class TurnoController {
    private readonly turnoService;
    constructor(turnoService: TurnoService);
    create(createTurnoDto: CreateTurnoDto): Promise<import("./entities/turno.entity").Turno>;
    findAll(): Promise<import("./entities/turno.entity").Turno[]>;
    findOne(id: string): Promise<import("./entities/turno.entity").Turno | null>;
    update(id: string, updateTurnoDto: UpdateTurnoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
