import { EmpleadoDispositivoService } from './empleado_dispositivo.service';
import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
export declare class EmpleadoDispositivoController {
    private readonly empleadoDispositivoService;
    constructor(empleadoDispositivoService: EmpleadoDispositivoService);
    create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto): Promise<import("./entities/empleado_dispositivo.entity").EmpleadoDispositivo>;
    findAll(page?: string, limit?: string): Promise<{
        data: import("./entities/empleado_dispositivo.entity").EmpleadoDispositivo[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    buscarPorEmpleado(id: string): Promise<import("./entities/empleado_dispositivo.entity").EmpleadoDispositivo[]>;
}
