import { Dispositivo } from "src/dispositivo/entities/dispositivo.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'marcas' })
export class Marca {
    @PrimaryGeneratedColumn()
    marca_id: number;

    @Column()
    fecha_marca: Date;

    @Column()
    hora_marca: string;

    @Column()
    evento: string;

    @Column()
    hashcode: string;

    @Column()
    info_adicional: string;

    @ManyToOne(() => Dispositivo, (dispositivo) => dispositivo.marcas)
    @JoinColumn({ name: "dispositivo_id" })
    dispositivo_id: Dispositivo;

    @Column()
    num_ficha: string

    @Column()
    comentario: string
}
