import { Dispositivo } from "../../dispositivo/entities/dispositivo.entity";
export declare class EmpleadoDispositivo {
    id: number;
    empleado_id: number;
    dispositivo: Dispositivo;
    fecha_entrada: Date;
    fecha_salida: Date;
    hora_entrada: string;
    hora_salida: string;
}
