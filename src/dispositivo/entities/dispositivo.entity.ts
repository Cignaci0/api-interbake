import { Cenco } from "src/cenco/entities/cenco.entity";
import { Marca } from "src/marcas/entities/marca.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'dispositivo' })
export class Dispositivo {
    @PrimaryGeneratedColumn()
    dispositivo_id: number;

    @Column()
    ubicacion: string;

    @Column()
    comuna: string

    @Column()
    modelo: string

    @Column()
    fabricante: string

    @Column()
    version_firmware: string

    @Column()
    direccion_ip: string

    @Column()
    gateway: string

    @Column()
    dns: string

    @Column()
    nombre: string;

    @Column()
    estado: number;

    @ManyToOne(() => Cenco, (cenco) => cenco.dispositivos)
    @JoinColumn({ name: 'cenco_id' })
    cenco_id: Cenco;

    @OneToMany(() => Marca, (marca) => marca.dispositivo_id)
    marcas: Marca[];

}
