"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_service_1 = require("../usuario/usuario.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(username, pass, req) {
        const user = await this.usersService.searchActiveUser(username);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        if (user.empleado && user.empleado.contrato_indefinido === false && user.empleado.fecha_fin_contrato) {
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            const finContrato = new Date(user.empleado.fecha_fin_contrato);
            finContrato.setHours(0, 0, 0, 0);
            if (hoy > finContrato) {
                throw new common_1.UnauthorizedException('Su contrato se encuentra vencido. No puede iniciar sesión.');
            }
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const payload = {
            sub: user.usuario_id,
            username: user.username,
            profile: user.perfil_id,
            num_ficha: user.empleado?.num_ficha,
            nombre_completo: user.nombres + ' ' + user.apellido_paterno + ' ' + user.apellido_materno
        };
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            username: user.username,
            perfil_id: user.perfil_id,
            num_ficha: user.empleado?.num_ficha || '',
            profile: user.perfil_id.toString()
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map