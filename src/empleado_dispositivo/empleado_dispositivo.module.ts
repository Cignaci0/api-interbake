import { Module } from '@nestjs/common';
import { EmpleadoDispositivoService } from './empleado_dispositivo.service';
import { EmpleadoDispositivoController } from './empleado_dispositivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoDispositivo, Usuario])],
  controllers: [EmpleadoDispositivoController],
  providers: [EmpleadoDispositivoService],
})
export class EmpleadoDispositivoModule {}
