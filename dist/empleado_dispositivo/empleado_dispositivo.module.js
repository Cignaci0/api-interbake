"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoDispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const empleado_dispositivo_service_1 = require("./empleado_dispositivo.service");
const empleado_dispositivo_controller_1 = require("./empleado_dispositivo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const empleado_dispositivo_entity_1 = require("./entities/empleado_dispositivo.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
let EmpleadoDispositivoModule = class EmpleadoDispositivoModule {
};
exports.EmpleadoDispositivoModule = EmpleadoDispositivoModule;
exports.EmpleadoDispositivoModule = EmpleadoDispositivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([empleado_dispositivo_entity_1.EmpleadoDispositivo, usuario_entity_1.Usuario])],
        controllers: [empleado_dispositivo_controller_1.EmpleadoDispositivoController],
        providers: [empleado_dispositivo_service_1.EmpleadoDispositivoService],
    })
], EmpleadoDispositivoModule);
//# sourceMappingURL=empleado_dispositivo.module.js.map