"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleTurnoModule = void 0;
const common_1 = require("@nestjs/common");
const detalle_turno_service_1 = require("./detalle_turno.service");
const detalle_turno_controller_1 = require("./detalle_turno.controller");
const typeorm_1 = require("@nestjs/typeorm");
const detalle_turno_entity_1 = require("./entities/detalle_turno.entity");
const turno_entity_1 = require("../turno/entities/turno.entity");
const horario_entity_1 = require("../horario/entities/horario.entity");
let DetalleTurnoModule = class DetalleTurnoModule {
};
exports.DetalleTurnoModule = DetalleTurnoModule;
exports.DetalleTurnoModule = DetalleTurnoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detalle_turno_entity_1.DetalleTurno, turno_entity_1.Turno, horario_entity_1.Horario])],
        controllers: [detalle_turno_controller_1.DetalleTurnoController],
        providers: [detalle_turno_service_1.DetalleTurnoService],
    })
], DetalleTurnoModule);
//# sourceMappingURL=detalle_turno.module.js.map