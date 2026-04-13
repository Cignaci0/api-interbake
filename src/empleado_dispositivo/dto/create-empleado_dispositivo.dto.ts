import { IsNumber } from "class-validator";

export class CreateEmpleadoDispositivoDto {
    @IsNumber()
    empleado_id: number;
    @IsNumber()
    dispositivo_id: number;
}
