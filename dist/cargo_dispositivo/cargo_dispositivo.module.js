"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoDispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const cargo_dispositivo_service_1 = require("./cargo_dispositivo.service");
const cargo_dispositivo_controller_1 = require("./cargo_dispositivo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cargo_dispositivo_entity_1 = require("./entities/cargo_dispositivo.entity");
const cargo_entity_1 = require("../cargo/entities/cargo.entity");
const dispositivo_entity_1 = require("../dispositivo/entities/dispositivo.entity");
let CargoDispositivoModule = class CargoDispositivoModule {
};
exports.CargoDispositivoModule = CargoDispositivoModule;
exports.CargoDispositivoModule = CargoDispositivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cargo_dispositivo_entity_1.CargoDispositivo, cargo_entity_1.Cargo, dispositivo_entity_1.Dispositivo])],
        controllers: [cargo_dispositivo_controller_1.CargoDispositivoController],
        providers: [cargo_dispositivo_service_1.CargoDispositivoService],
    })
], CargoDispositivoModule);
//# sourceMappingURL=cargo_dispositivo.module.js.map