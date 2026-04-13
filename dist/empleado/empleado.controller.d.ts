import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
export declare class EmpleadoController {
    private readonly empleadoService;
    constructor(empleadoService: EmpleadoService);
    create(createEmpleadoDto: CreateEmpleadoDto): Promise<{
        message: string;
    }>;
    update(id: string, updateEmpleadoDto: UpdateEmpleadoDto): Promise<any>;
    findAll(page?: string, limit?: string): Promise<{
        data: import("./entities/empleado.entity").Empleado[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
