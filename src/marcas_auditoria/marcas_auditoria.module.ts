import { Module } from '@nestjs/common';
import { MarcasAuditoriaService } from './marcas_auditoria.service';
import { MarcasAuditoriaController } from './marcas_auditoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcasAuditoria } from './entities/marcas_auditoria.entity';
import { Marca } from 'src/marcas/entities/marca.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MarcasAuditoria, Marca])
  ],
  controllers: [MarcasAuditoriaController],
  providers: [MarcasAuditoriaService],
})
export class MarcasAuditoriaModule {}
