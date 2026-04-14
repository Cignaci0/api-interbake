import { Module } from '@nestjs/common';
import { DetalleTurnoService } from './detalle_turno.service';
import { DetalleTurnoController } from './detalle_turno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleTurno } from './entities/detalle_turno.entity';
import { Turno } from 'src/turno/entities/turno.entity';
import { Horario } from 'src/horario/entities/horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleTurno, Turno, Horario])],
  controllers: [DetalleTurnoController],
  providers: [DetalleTurnoService],
})
export class DetalleTurnoModule {}

