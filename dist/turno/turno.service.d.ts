import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { Turno } from './entities/turno.entity';
export declare class TurnoService {
    private readonly turnoRepository;
    create(createTurnoDto: CreateTurnoDto): Promise<Turno>;
    findAll(): Promise<Turno[]>;
    findOne(id: number): Promise<Turno | null>;
    update(id: number, updateTurnoDto: UpdateTurnoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
