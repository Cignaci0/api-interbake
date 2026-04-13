import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cargo_dispositivo' })
export class CargoDispositivo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cargo_id: number;

    @Column()
    dispositivo_id: number;
}
