import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { Usuario } from "../usuario/entities/usuario.entity";
export declare class EmpleadoService {
    private readonly empleadoRepository;
    private readonly userRepository;
    constructor(empleadoRepository: Repository<Empleado>, userRepository: Repository<Usuario>);
    create(createEmpleadoDto: CreateEmpleadoDto): Promise<{
        message: string;
    }>;
    actualizarEmpleado(id: number, updateDto: UpdateEmpleadoDto): Promise<any>;
    findAll(page?: number, limit?: number): Promise<{
        data: Empleado[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
