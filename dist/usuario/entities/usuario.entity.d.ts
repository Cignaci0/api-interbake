import { Cenco } from "../../cenco/entities/cenco.entity";
import { Empleado } from "../../empleado/entities/empleado.entity";
export declare class Usuario {
    usuario_id: number;
    username: string;
    password: string;
    estado: number;
    apellido_paterno: string;
    apellido_materno: string;
    nombres: string;
    email: string;
    perfil_id: number;
    run: string;
    reset_token: string | null;
    reset_token_expires: Date | null;
    empleado: Empleado;
    cencos: Cenco[];
}
