import { HttpException, Injectable } from '@nestjs/common';
import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
import { UpdateEmpleadoDispositivoDto } from './dto/update-empleado_dispositivo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Cenco } from 'src/cenco/entities/cenco.entity';

@Injectable()
export class EmpleadoDispositivoService {

  constructor(
    @InjectRepository(EmpleadoDispositivo)
    private readonly empleadoDispositivoRepository: Repository<EmpleadoDispositivo>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) { }

  create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto) {
    return 'This action adds a new empleadoDispositivo';
  }

}
