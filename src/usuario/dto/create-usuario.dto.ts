export class CreateUsuarioDto {
    username: string;
    password?: string;
    nombres?: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    email?: string;
    run?: string;
    perfil_id?: number;
    estado?: number;
}
