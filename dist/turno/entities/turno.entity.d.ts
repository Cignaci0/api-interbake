import { DetalleTurno } from "../../detalle_turno/entities/detalle_turno.entity";
export declare class Turno {
    turno_id: number;
    nombre: string;
    estado_id: number;
    detalle_turno: DetalleTurno[];
}
