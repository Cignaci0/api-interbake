import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: Usuario): Promise<CreateUsuarioDto>;
    findAll(page?: string, limit?: string): Promise<{
        data: Usuario[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    actualizar(id: string, updateDto: Usuario): Promise<any>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
