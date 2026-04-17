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
exports.Marca = void 0;
const dispositivo_entity_1 = require("../../dispositivo/entities/dispositivo.entity");
const empleado_entity_1 = require("../../empleado/entities/empleado.entity");
const typeorm_1 = require("typeorm");
let Marca = class Marca {
    marca_id;
    fecha_marca;
    hora_marca;
    evento;
    hashcode;
    info_adicional;
    dispositivo_id;
    num_ficha;
    empleado;
    comentario;
};
exports.Marca = Marca;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Marca.prototype, "marca_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Marca.prototype, "fecha_marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "hora_marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "hashcode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "info_adicional", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dispositivo_entity_1.Dispositivo, (dispositivo) => dispositivo.marcas),
    (0, typeorm_1.JoinColumn)({ name: "dispositivo_id" }),
    __metadata("design:type", dispositivo_entity_1.Dispositivo)
], Marca.prototype, "dispositivo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "num_ficha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empleado_entity_1.Empleado, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'num_ficha', referencedColumnName: 'num_ficha' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], Marca.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Marca.prototype, "comentario", void 0);
exports.Marca = Marca = __decorate([
    (0, typeorm_1.Entity)({ name: 'marcas' })
], Marca);
//# sourceMappingURL=marca.entity.js.map