"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const dispositivo_service_1 = require("./dispositivo.service");
const dispositivo_controller_1 = require("./dispositivo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dispositivo_entity_1 = require("./entities/dispositivo.entity");
let DispositivoModule = class DispositivoModule {
};
exports.DispositivoModule = DispositivoModule;
exports.DispositivoModule = DispositivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dispositivo_entity_1.Dispositivo])],
        controllers: [dispositivo_controller_1.DispositivoController],
        providers: [dispositivo_service_1.DispositivoService],
    })
], DispositivoModule);
//# sourceMappingURL=dispositivo.module.js.map