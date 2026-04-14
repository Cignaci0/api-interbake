import { DetalleTurno } from "../../detalle_turno/entities/detalle_turno.entity";
export declare class Horario {
    horario_id: number;
    hora_entrada: string;
    hora_salida: string;
    holgura_mins: string;
    colacion: string;
    detalle_turno: DetalleTurno[];
}
