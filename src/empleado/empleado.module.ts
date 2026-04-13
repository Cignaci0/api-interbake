import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Empleado } from './entities/empleado.entity';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado, Usuario])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule { }
