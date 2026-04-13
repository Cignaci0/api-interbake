import { Module } from '@nestjs/common';
import { CencoService } from './cenco.service';
import { CencoController } from './cenco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cenco } from './entities/cenco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cenco])],
  controllers: [CencoController],
  providers: [CencoService],
})
export class CencoModule { }
