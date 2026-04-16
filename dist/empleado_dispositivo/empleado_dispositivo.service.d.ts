import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
import { UpdateEmpleadoDispositivoDto } from './dto/update-empleado_dispositivo.dto';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { Repository } from 'typeorm';
import { Empleado } from "../empleado/entities/empleado.entity";
import { Dispositivo } from "../dispositivo/entities/dispositivo.entity";
export declare class EmpleadoDispositivoService {
    private readonly empleadoDispositivoRepository;
    private readonly empleadoRepository;
    private readonly dispositivoRepository;
    constructor(empleadoDispositivoRepository: Repository<EmpleadoDispositivo>, empleadoRepository: Repository<Empleado>, dispositivoRepository: Repository<Dispositivo>);
    create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto): Promise<EmpleadoDispositivo>;
    findAll(page?: number, limit?: number): Promise<{
        data: EmpleadoDispositivo[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    buscarPorEmpleado(idEmpleado: number): Promise<EmpleadoDispositivo[]>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, updateEmpleadoDispositivoDto: UpdateEmpleadoDispositivoDto): Promise<import("typeorm").UpdateResult>;
}
