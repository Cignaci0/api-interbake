import { Horario } from "src/horario/entities/horario.entity";
import { Turno } from "src/turno/entities/turno.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'detalle_turno'})
export class DetalleTurno {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(() => Turno, (turno) => turno.detalle_turno, {onDelete:'CASCADE'})
    @JoinColumn({ name: 'turno_id' })
    turno_id:Turno

    @ManyToOne(() => Horario, (horario) => horario.detalle_turno)
    @JoinColumn({ name: 'horario_id' })
    horario_id:Horario

    @Column()
    cod_dia:number
}
