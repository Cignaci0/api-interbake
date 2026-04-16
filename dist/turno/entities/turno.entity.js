"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turno = void 0;
const detalle_turno_entity_1 = require("../../detalle_turno/entities/detalle_turno.entity");
const typeorm_1 = require("typeorm");
let Turno = class Turno {
    turno_id;
    nombre;
    estado_id;
    detalle_turno;
};
exports.Turno = Turno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Turno.prototype, "turno_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Turno.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Turno.prototype, "estado_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detalle_turno_entity_1.DetalleTurno, (detalle_turno) => detalle_turno.turno_id, { cascade: true }),
    __metadata("design:type", Array)
], Turno.prototype, "detalle_turno", void 0);
exports.Turno = Turno = __decorate([
    (0, typeorm_1.Entity)()
], Turno);
//# sourceMappingURL=turno.entity.js.map