import { Cargo } from "../../cargo/entities/cargo.entity";
import { Dispositivo } from "../../dispositivo/entities/dispositivo.entity";
export declare class CargoDispositivo {
    id: number;
    cargo_id: Cargo;
    dispositivo_id: Dispositivo;
}
