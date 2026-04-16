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
exports.DetalleTurno = void 0;
const horario_entity_1 = require("../../horario/entities/horario.entity");
const turno_entity_1 = require("../../turno/entities/turno.entity");
const typeorm_1 = require("typeorm");
let DetalleTurno = class DetalleTurno {
    id;
    turno_id;
    horario_id;
    cod_dia;
};
exports.DetalleTurno = DetalleTurno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetalleTurno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => turno_entity_1.Turno, (turno) => turno.detalle_turno, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'turno_id' }),
    __metadata("design:type", turno_entity_1.Turno)
], DetalleTurno.prototype, "turno_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => horario_entity_1.Horario, (horario) => horario.detalle_turno),
    (0, typeorm_1.JoinColumn)({ name: 'horario_id' }),
    __metadata("design:type", horario_entity_1.Horario)
], DetalleTurno.prototype, "horario_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleTurno.prototype, "cod_dia", void 0);
exports.DetalleTurno = DetalleTurno = __decorate([
    (0, typeorm_1.Entity)()
], DetalleTurno);
//# sourceMappingURL=detalle_turno.entity.js.map