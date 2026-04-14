import { PartialType } from '@nestjs/swagger';
import { CreateDetalleTurnoDto } from './create-detalle_turno.dto';

export class UpdateDetalleTurnoDto extends PartialType(CreateDetalleTurnoDto) {}
