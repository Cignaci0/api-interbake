import { DetalleTurnoService } from './detalle_turno.service';
import { CreateDetalleTurnoDto } from './dto/create-detalle_turno.dto';
import { UpdateDetalleTurnoDto } from './dto/update-detalle_turno.dto';
export declare class DetalleTurnoController {
    private readonly detalleTurnoService;
    constructor(detalleTurnoService: DetalleTurnoService);
    asignacion(turnoId: number, codDias: number[], idsHorarios: number[]): Promise<import("./entities/detalle_turno.entity").DetalleTurno[]>;
    create(createDetalleTurnoDto: CreateDetalleTurnoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDetalleTurnoDto: UpdateDetalleTurnoDto): string;
    remove(id: string): string;
}
