import { CreateDetalleTurnoDto } from './dto/create-detalle_turno.dto';
import { UpdateDetalleTurnoDto } from './dto/update-detalle_turno.dto';
import { DetalleTurno } from './entities/detalle_turno.entity';
import { Repository } from 'typeorm';
import { Turno } from "../turno/entities/turno.entity";
import { Horario } from "../horario/entities/horario.entity";
export declare class DetalleTurnoService {
    private readonly detalleTurnoRepository;
    private readonly turnoRepository;
    private readonly horarioRepository;
    constructor(detalleTurnoRepository: Repository<DetalleTurno>, turnoRepository: Repository<Turno>, horarioRepository: Repository<Horario>);
    create(createDetalleTurnoDto: CreateDetalleTurnoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDetalleTurnoDto: UpdateDetalleTurnoDto): string;
    remove(id: number): string;
    asignacionDetalleTurno(turnoId: number, codDias: number[], idsHorarios: number[]): Promise<DetalleTurno[]>;
}
