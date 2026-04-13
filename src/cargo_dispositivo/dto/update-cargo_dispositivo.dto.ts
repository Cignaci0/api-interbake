import { PartialType } from '@nestjs/swagger';
import { CreateCargoDispositivoDto } from './create-cargo_dispositivo.dto';

export class UpdateCargoDispositivoDto extends PartialType(CreateCargoDispositivoDto) {}
