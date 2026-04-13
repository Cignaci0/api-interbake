import { Module } from '@nestjs/common';
import { CargoDispositivoService } from './cargo_dispositivo.service';
import { CargoDispositivoController } from './cargo_dispositivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoDispositivo } from './entities/cargo_dispositivo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargoDispositivo])],
  controllers: [CargoDispositivoController],
  providers: [CargoDispositivoService],
})
export class CargoDispositivoModule {}
