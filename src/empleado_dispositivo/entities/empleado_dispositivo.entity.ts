import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'empleado_dispositivo' })
export class EmpleadoDispositivo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empleado_id: number;

    @Column()
    dispositivo_id: number;
}
