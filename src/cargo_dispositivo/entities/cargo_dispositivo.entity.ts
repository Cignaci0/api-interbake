import { Cargo } from "src/cargo/entities/cargo.entity";
import { Dispositivo } from "src/dispositivo/entities/dispositivo.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cargo_dispositivo' })
export class CargoDispositivo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cargo)
    @JoinColumn({ name: 'cargo_id' })
    cargo_id: Cargo;

    @ManyToOne(() => Dispositivo)
    @JoinColumn({ name: 'dispositivo_id' })
    dispositivo_id: Dispositivo;
}
