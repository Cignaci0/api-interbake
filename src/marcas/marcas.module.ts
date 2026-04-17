import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { MarcasAuditoria } from 'src/marcas_auditoria/entities/marcas_auditoria.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forFeature([Marca, MarcasAuditoria]),
    ConfigModule,
  ],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}
