import { Horario } from "../../horario/entities/horario.entity";
import { Turno } from "../../turno/entities/turno.entity";
export declare class DetalleTurno {
    id: number;
    turno_id: Turno;
    horario_id: Horario;
    cod_dia: number;
}
