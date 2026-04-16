import { Cargo } from "../../cargo/entities/cargo.entity";
import { Cenco } from "../../cenco/entities/cenco.entity";
export declare class Empleado {
    empleado_id: number;
    fecha_nacimiento: Date;
    direccion: string;
    sexo: string;
    telefono_fijo: number;
    telefono_movil: number;
    comuna: string;
    fecha_ini_contrato: Date;
    fecha_fin_contrato: Date;
    contrato_indefinido: boolean;
    art_22: boolean;
    run: string;
    clave: string;
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    cargo_id: Cargo;
    email: string;
    email_laboral: string;
    num_ficha: string;
    cenco_id: Cenco;
    email_noti: string;
}
