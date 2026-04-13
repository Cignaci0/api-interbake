import { Empleado } from "../../empleado/entities/empleado.entity";
export declare class Cargo {
    cargo_id: number;
    nombre: string;
    estado: number;
    tipo_cargo: number;
    empleados: Empleado[];
}
