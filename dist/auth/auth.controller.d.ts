import { AuthService } from './auth.service';
import type { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>, req: Request): Promise<{
        token: string;
        username: string;
        perfil_id: number;
        num_ficha: string;
        profile: string;
    }>;
}
