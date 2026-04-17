import { Cenco } from "../../cenco/entities/cenco.entity";
import { Marca } from "../../marcas/entities/marca.entity";
export declare class Dispositivo {
    dispositivo_id: number;
    ubicacion: string;
    comuna: string;
    modelo: string;
    fabricante: string;
    version_firmware: string;
    direccion_ip: string;
    gateway: string;
    dns: string;
    nombre: string;
    estado: number;
    cenco_id: Cenco;
    marcas: Marca[];
}
