import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { Repository } from 'typeorm';
import { Usuario } from "../usuario/entities/usuario.entity";
export declare class EmpleadoDispositivoService {
    private readonly empleadoDispositivoRepository;
    private readonly usuarioRepository;
    constructor(empleadoDispositivoRepository: Repository<EmpleadoDispositivo>, usuarioRepository: Repository<Usuario>);
    create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto): string;
}
