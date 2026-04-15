import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
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
}
