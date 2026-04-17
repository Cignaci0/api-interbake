import { Dispositivo } from "../../dispositivo/entities/dispositivo.entity";
export declare class Marca {
    marca_id: number;
    fecha_marca: Date;
    hora_marca: string;
    evento: string;
    hashcode: string;
    info_adicional: string;
    dispositivo_id: Dispositivo;
    num_ficha: string;
    comentario: string;
}
