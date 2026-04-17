import { Marca } from "../../marcas/entities/marca.entity";
export declare class MarcasAuditoria {
    correlativo: number;
    marca: Marca;
    fecha_marca: Date;
    hora_marca: string;
    evento: number;
    hashcode: string;
    num_ficha: string;
    fecha_actualizacion: Date;
    usuario_actualizador: string;
    token: string;
    id_tipo_marca: number;
    info_adicional: string;
    comentario: string;
    estado: number;
    datos_update: any;
}
