import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
import { UpdateEmpleadoDispositivoDto } from './dto/update-empleado_dispositivo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { In, Repository } from 'typeorm';
import { Empleado } from 'src/empleado/entities/empleado.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';

@Injectable()
export class EmpleadoDispositivoService {

  constructor(
    @InjectRepository(EmpleadoDispositivo)
    private readonly empleadoDispositivoRepository: Repository<EmpleadoDispositivo>,
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    @InjectRepository(Dispositivo)
    private readonly dispositivoRepository: Repository<Dispositivo>,
  ) { }

  create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto) {
    const nuevoRegistro = this.empleadoDispositivoRepository.create(createEmpleadoDispositivoDto);
    return this.empleadoDispositivoRepository.save(nuevoRegistro);
  }
}

