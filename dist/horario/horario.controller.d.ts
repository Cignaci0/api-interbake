import { HorarioService } from './horario.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
export declare class HorarioController {
    private readonly horarioService;
    constructor(horarioService: HorarioService);
    create(createHorarioDto: CreateHorarioDto): Promise<import("./entities/horario.entity").Horario>;
    findAll(): Promise<import("./entities/horario.entity").Horario[]>;
    findOne(id: string): Promise<import("./entities/horario.entity").Horario | null>;
    update(id: string, updateHorarioDto: UpdateHorarioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
