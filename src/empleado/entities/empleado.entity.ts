import { Cargo } from "src/cargo/entities/cargo.entity";
import { Cenco } from "src/cenco/entities/cenco.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'empleado' })
export class Empleado {
    @PrimaryGeneratedColumn()
    empleado_id: number;

    @Column()
    fecha_nacimiento: Date;

    @Column()
    direccion: string;

    @Column()
    sexo: string;

    @Column()
    telefono_fijo: number;

    @Column({ nullable: true })
    telefono_movil: number;

    @Column()
    comuna: string;

    @Column()
    fecha_ini_contrato: Date;

    @Column()
    fecha_fin_contrato: Date;

    @Column()
    contrato_indefinido: boolean;

    @Column()
    art_22: boolean;

    @Column()
    run: string;

    @Column({ nullable: true })
    clave: string;

    @Column()
    nombres: string;

    @Column()
    apellido_paterno: string;

    @Column()
    apellido_materno: string;

    @ManyToOne(() => Cargo, (cargo) => cargo.empleados)
    @JoinColumn({ name: 'cargo_id' })
    cargo_id: Cargo;

    @Column()
    email: string;

    @Column()
    email_laboral: string;

    @Column({ unique: true })
    num_ficha: string;

    @ManyToOne(() => Cenco, (cenco) => cenco.empleados)
    @JoinColumn({ name: 'cenco_id' })
    cenco_id: Cenco;

    @Column()
    email_noti: string;


}
