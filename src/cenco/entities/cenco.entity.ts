import { Dispositivo } from "src/dispositivo/entities/dispositivo.entity";
import { Empleado } from "src/empleado/entities/empleado.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cenco' })
export class Cenco {
    @PrimaryGeneratedColumn()
    cenco_id: number;

    @Column()
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    region: string;

    @Column()
    comuna: string;

    @Column()
    email_general:string

    @Column()
    email_notificacion:string

    @Column()
    zona_extrema:boolean

    @Column()
    estado: number;

    @OneToMany(() => Empleado, (empleado) => empleado.cenco_id)
    empleados: Empleado[];

    @OneToMany(() => Dispositivo, (dispositivo) => dispositivo.cenco_id)
    dispositivos: Dispositivo[];

    @ManyToMany(() => Usuario, (usuario) => usuario.cencos)
    usuarios: Usuario[];
}
