import { BadRequestException, ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) { }


  async searchActiveUser(username: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({
      where: {
        username,
        estado: 1
      },
      relations: [
        'empleado'
      ],
    });
  }

  async crearUsuario(usuario: Usuario): Promise<CreateUsuarioDto> {
    try {
      const salt = await bcrypt.genSalt();
      const nuevo = this.usuarioRepository.create(usuario);
      const claveHash = nuevo.password;
      nuevo.password = await bcrypt.hash(claveHash, salt);
      const guardada = this.usuarioRepository.save(nuevo);

      return {
        username: (await guardada).username,
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      if (error.code === '23505') {
        throw new ConflictException('El usuario ya existe o el identificador está duplicado');
      }

      if (error.name === 'ValidationError') {
        throw new BadRequestException('Los datos proporcionados no son válidos');
      }

      throw new InternalServerErrorException('Error crítico al crear el usuario en la base de datos');
    }
  }

  async actualizarUsuario(id: number, updateDto: UpdateUsuarioDto): Promise<any> {
    const usuario = await this.usuarioRepository.preload({
      usuario_id: id,
      ...updateDto,
    });

    if (!usuario) {
      throw new NotFoundException(`El usuario con ID ${id} no existe`);
    }

    try {
      const actualizada = await this.usuarioRepository.save(usuario);

      return {
        mensaje: 'Usuario actualizado con éxito',
        id: actualizada.usuario_id,
        usuario: actualizada.username,
        run: actualizada.run
      };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('El RUT ya pertenece a otro usuario');
      }
      throw new InternalServerErrorException('Error al actualizar el usuario');
    }

    
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [data, total] = await this.usuarioRepository.findAndCount({
      skip,
      take: limit,
      order: {
        usuario_id: 'ASC',
      },
      relations: ['empleado'],
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

  remove(id: number) {
    const usuario = this.usuarioRepository.findOne({ where: { usuario_id: id } });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    return this.usuarioRepository.delete(id);
  }

}
