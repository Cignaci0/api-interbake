import { Cenco } from "src/cenco/entities/cenco.entity";
import { Empleado } from "../../empleado/entities/empleado.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {
    @PrimaryGeneratedColumn()
    usuario_id: number;

    @Column({unique:true})
    username: string;

    @Column()
    password: string;

    @Column()
    estado: number;

    @Column()
    apellido_paterno: string;

    @Column()
    apellido_materno: string;

    @Column({ name: 'nombre' })
    nombres: string;

    @Column()
    email: string;

    @Column()
    perfil_id: number;

    @Column()
    run: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'reset_token'
    })
    reset_token: string | null;

    @Column({
        type: 'timestamp',
        nullable: true,
        name: 'reset_token_expires'
    })
    reset_token_expires: Date | null;

    @OneToOne(() => Empleado)
    @JoinColumn({ name: 'empleado_id' })
    empleado: Empleado;


    @ManyToMany(() => Cenco, (cenco) => cenco.usuarios)
    @JoinTable({
        name: 'usuario_has_cenco',
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'usuario_id'
        },
        inverseJoinColumn: {
            name: 'cenco_id',
            referencedColumnName: 'cenco_id'
        }
    })
    cencos: Cenco[];
}
