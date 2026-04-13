import { PartialType } from '@nestjs/swagger';
import { CreateEmpleadoDispositivoDto } from './create-empleado_dispositivo.dto';

export class UpdateEmpleadoDispositivoDto extends PartialType(CreateEmpleadoDispositivoDto) {}
