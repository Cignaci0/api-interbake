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
exports.EmpleadoDispositivo = void 0;
const typeorm_1 = require("typeorm");
let EmpleadoDispositivo = class EmpleadoDispositivo {
    id;
    empleado_id;
    dispositivo_id;
    fecha_entrada;
    fecha_salida;
    hora_entrada;
    hora_salida;
};
exports.EmpleadoDispositivo = EmpleadoDispositivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EmpleadoDispositivo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmpleadoDispositivo.prototype, "empleado_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmpleadoDispositivo.prototype, "dispositivo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EmpleadoDispositivo.prototype, "fecha_entrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EmpleadoDispositivo.prototype, "fecha_salida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmpleadoDispositivo.prototype, "hora_entrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmpleadoDispositivo.prototype, "hora_salida", void 0);
exports.EmpleadoDispositivo = EmpleadoDispositivo = __decorate([
    (0, typeorm_1.Entity)({ name: 'empleado_dispositivo' })
], EmpleadoDispositivo);
//# sourceMappingURL=empleado_dispositivo.entity.js.map