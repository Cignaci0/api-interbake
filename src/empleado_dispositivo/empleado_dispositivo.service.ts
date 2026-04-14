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
    return 'This action adds a new empleadoDispositivo';
  }

  async asignacionEmpleadoDispositivo(idEmpleado: number, idsDispositivos: number[]) {
    // 1. Verificar si existe el empleado
    const empleado = await this.empleadoRepository.findOne({ where: { empleado_id: idEmpleado } });
    if (!empleado) {
      throw new NotFoundException(`El empleado con id ${idEmpleado} no fue encontrado.`);
    }

    // 2. Verificar si existen todos los dispositivos enviados
    if (idsDispositivos && idsDispositivos.length > 0) {
      const dispositivos = await this.dispositivoRepository.find({
        where: { dispositivo_id: In(idsDispositivos) }
      });

      if (dispositivos.length !== idsDispositivos.length) {
        const idsEncontrados = dispositivos.map(d => d.dispositivo_id);
        const idsFaltantes = idsDispositivos.filter(id => !idsEncontrados.includes(id));
        throw new NotFoundException(`Los siguientes ids de dispositivos no existen: ${idsFaltantes.join(', ')}.`);
      }
    }

    // 3. Eliminar todos los registros del empleado
    await this.empleadoDispositivoRepository.delete({ empleado_id: idEmpleado });

    // 4. Insertar los nuevos registros
    if (idsDispositivos && idsDispositivos.length > 0) {
      const nuevosRegistros = idsDispositivos.map(id =>
        this.empleadoDispositivoRepository.create({
          empleado_id: idEmpleado,
          dispositivo_id: id,
        })
      );
      return await this.empleadoDispositivoRepository.save(nuevosRegistros);
    }

    return [];
  }

}

