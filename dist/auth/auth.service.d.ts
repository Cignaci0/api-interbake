import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as express from 'express';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsuarioService, jwtService: JwtService);
    signIn(username: string, pass: string, req: express.Request): Promise<{
        token: string;
        username: string;
        perfil_id: number;
        num_ficha: string;
        profile: string;
    }>;
}
