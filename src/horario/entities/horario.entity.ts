import { DetalleTurno } from "src/detalle_turno/entities/detalle_turno.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'horario'})
export class Horario {
    @PrimaryGeneratedColumn()
    horario_id:number

    @Column()
    hora_entrada:string

    @Column()
    hora_salida:string

    @Column()
    holgura_mins:string

    @Column()
    colacion:string

    @OneToMany(() => DetalleTurno, (detalle_turno) => detalle_turno.horario_id)
    detalle_turno:DetalleTurno[]

}
