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

  async create(createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto) {
    const { empleado_id, dispositivo_id, ...rest } = createEmpleadoDispositivoDto;
    const nuevoRegistro = this.empleadoDispositivoRepository.create({
      ...rest,
      empleado_id,
      dispositivo: { dispositivo_id },
    });
    return this.empleadoDispositivoRepository.save(nuevoRegistro);
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.empleadoDispositivoRepository.findAndCount({
      order: {
        id: 'ASC'
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }

  async buscarPorEmpleado(idEmpleado:number){
    const empleado = await this.empleadoDispositivoRepository.find({
      where:{
        empleado_id:idEmpleado
      },
      relations:{
        dispositivo:true
      }
    })
    if(empleado.length === 0){
      throw new NotFoundException(`No se encontro ningun registro con el id ${idEmpleado}`);
    }
    return empleado;
  }

  async delete(id:number){
    const empleado = await this.empleadoDispositivoRepository.findOne({where:{id:id}})
    if(!empleado){
      throw new NotFoundException(`No se encontro ningun registro con el id ${id}`);
    }
    return this.empleadoDispositivoRepository.delete(id);
  }

  async update(id:number, updateEmpleadoDispositivoDto:UpdateEmpleadoDispositivoDto){
    const empleado = await this.empleadoDispositivoRepository.findOne({where:{id:id}})
    if(!empleado){
      throw new NotFoundException(`No se encontro ningun registro con el id ${id}`);
    }
    return this.empleadoDispositivoRepository.update(id, updateEmpleadoDispositivoDto);
  }
}

