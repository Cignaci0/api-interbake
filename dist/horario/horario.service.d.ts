import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario } from './entities/horario.entity';
export declare class HorarioService {
    private readonly horarioRepository;
    create(createHorarioDto: CreateHorarioDto): Promise<Horario>;
    findAll(page?: number, limit?: number): Promise<{
        data: Horario[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    findOne(id: number): Promise<Horario>;
    update(id: number, updateHorarioDto: UpdateHorarioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
