import { Dispositivo } from "../../dispositivo/entities/dispositivo.entity";
import { Empleado } from "../../empleado/entities/empleado.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
export declare class Cenco {
    cenco_id: number;
    nombre: string;
    direccion: string;
    region: string;
    comuna: string;
    email_general: string;
    email_notificacion: string;
    zona_extrema: boolean;
    estado: number;
    empleados: Empleado[];
    dispositivos: Dispositivo[];
    usuarios: Usuario[];
}
