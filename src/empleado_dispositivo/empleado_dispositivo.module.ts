import { Module } from '@nestjs/common';
import { EmpleadoDispositivoService } from './empleado_dispositivo.service';
import { EmpleadoDispositivoController } from './empleado_dispositivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoDispositivo } from './entities/empleado_dispositivo.entity';
import { Empleado } from 'src/empleado/entities/empleado.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoDispositivo, Empleado, Dispositivo])],
  controllers: [EmpleadoDispositivoController],
  providers: [EmpleadoDispositivoService],
})
export class EmpleadoDispositivoModule {}

