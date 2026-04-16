import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    searchActiveUser(username: string): Promise<Usuario | null>;
    crearUsuario(usuario: Usuario): Promise<CreateUsuarioDto>;
    actualizarUsuario(id: number, updateDto: UpdateUsuarioDto): Promise<any>;
    findAll(page?: number, limit?: number): Promise<{
        data: Usuario[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
