import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { In, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';


@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,

  ) { }

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const nuevoEmpleado = this.empleadoRepository.create(createEmpleadoDto);
    const guardarNuevoEmpleado = await this.empleadoRepository.save(nuevoEmpleado);

    if (!guardarNuevoEmpleado) throw new HttpException('Error al crear el empleado', 400);

    const empleadoCreado = await this.empleadoRepository.findOne({
      where: { empleado_id: guardarNuevoEmpleado.empleado_id },
      relations: [
        'cenco_id'
      ]
    })

    if (!empleadoCreado) throw new HttpException('No se encontro el empleado', 400);
    const salt = await bcrypt.genSalt();
    const claveHash = await bcrypt.hash(empleadoCreado.run, salt);

    const nuevoUser = this.userRepository.create({
      username: empleadoCreado?.num_ficha,
      password: claveHash,
      nombres: empleadoCreado?.nombres,
      apellido_paterno: empleadoCreado?.apellido_paterno,
      apellido_materno: empleadoCreado?.apellido_materno,
      email: empleadoCreado?.email,
      estado: 1,
      perfil_id: 8,
      run: empleadoCreado?.run,
      empleado: { empleado_id: empleadoCreado?.empleado_id },
    });

    const guardarNuevoUser = await this.userRepository.save(nuevoUser);
    if (!guardarNuevoUser) throw new HttpException('Error al crear el usuario', 400);

    return {
      message: 'Empleado creado correctamente y asociado a un usuario!'
    }
  }

  async actualizarEmpleado(id: number, updateDto: UpdateEmpleadoDto): Promise<any> {
    const empleado = await this.empleadoRepository.preload({
      empleado_id: id,
      ...updateDto,
    });

    if (!empleado) {
      throw new NotFoundException(`El empleado con ID ${id} no existe`);
    }

    try {
      const actualizada = await this.empleadoRepository.save(empleado);

      return {
        mensaje: 'Empleado actualizado con éxito',
        id: actualizada.empleado_id,
        nombre: `${actualizada.nombres} ${actualizada.apellido_paterno}`,
        num_ficha: actualizada.num_ficha
      };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('El RUN o Número de Ficha ya pertenece a otro empleado');
      }
      throw new InternalServerErrorException('Error al actualizar el empleado');
    }
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [data, total] = await this.empleadoRepository.findAndCount({
      skip,
      take: limit,
      order: {
        empleado_id: 'ASC',
      },
      relations: ['cargo_id', 'cenco_id'],
    });

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

 async remove(id: number) {
    const empleado = await this.empleadoRepository.findOne({ where: { empleado_id: id } });
    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }
    return this.empleadoRepository.delete(id);
  }
}
