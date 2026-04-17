import { DetalleTurno } from "src/detalle_turno/entities/detalle_turno.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'turno'})
export class Turno {
    @PrimaryGeneratedColumn()
    turno_id:number

    @Column()
    nombre:string

    @Column()
    estado_id:number

    @OneToMany(() => DetalleTurno, (detalle_turno) => detalle_turno.turno_id,{cascade:true})
    detalle_turno:DetalleTurno[]
}
