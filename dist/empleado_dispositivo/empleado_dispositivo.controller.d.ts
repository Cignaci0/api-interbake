import { EmpleadoDispositivoService } from './empleado_dispositivo.service';
import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
export declare class EmpleadoDispositivoController {
    private readonly empleadoDispositivoService;
    constructor(empleadoDispositivoService: EmpleadoDispositivoService);
    create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto): Promise<import("./entities/empleado_dispositivo.entity").EmpleadoDispositivo>;
}
