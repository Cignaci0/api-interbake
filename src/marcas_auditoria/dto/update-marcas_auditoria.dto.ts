import { PartialType } from '@nestjs/swagger';
import { CreateMarcasAuditoriaDto } from './create-marcas_auditoria.dto';

export class UpdateMarcasAuditoriaDto extends PartialType(CreateMarcasAuditoriaDto) {}
