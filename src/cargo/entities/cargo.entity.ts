import { Empleado } from "src/empleado/entities/empleado.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cargo' })
export class Cargo {
    @PrimaryGeneratedColumn()
    cargo_id: number;

    @Column()
    nombre: string;

    @Column()
    estado: number;

    @Column()
    tipo_cargo:number

    @OneToMany(() => Empleado, (empleado) => empleado.cargo_id)
    empleados: Empleado[];
}
