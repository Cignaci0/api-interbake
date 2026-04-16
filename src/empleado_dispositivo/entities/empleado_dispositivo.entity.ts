import { Dispositivo } from "src/dispositivo/entities/dispositivo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'empleado_dispositivo' })
export class EmpleadoDispositivo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empleado_id: number;

    @ManyToOne(() => Dispositivo, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'dispositivo_id' })
    dispositivo: Dispositivo;

    @Column()
    fecha_entrada: Date;

    @Column()
    fecha_salida: Date;

    @Column()
    hora_entrada:string;

    @Column()
    hora_salida:string;
}
