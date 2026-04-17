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
exports.Dispositivo = void 0;
const cenco_entity_1 = require("../../cenco/entities/cenco.entity");
const marca_entity_1 = require("../../marcas/entities/marca.entity");
const typeorm_1 = require("typeorm");
let Dispositivo = class Dispositivo {
    dispositivo_id;
    ubicacion;
    comuna;
    modelo;
    fabricante;
    version_firmware;
    direccion_ip;
    gateway;
    dns;
    nombre;
    estado;
    cenco_id;
    marcas;
};
exports.Dispositivo = Dispositivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dispositivo.prototype, "dispositivo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "comuna", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "fabricante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "version_firmware", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "direccion_ip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "dns", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dispositivo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Dispositivo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cenco_entity_1.Cenco, (cenco) => cenco.dispositivos),
    (0, typeorm_1.JoinColumn)({ name: 'cenco_id' }),
    __metadata("design:type", cenco_entity_1.Cenco)
], Dispositivo.prototype, "cenco_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => marca_entity_1.Marca, (marca) => marca.dispositivo_id),
    __metadata("design:type", Array)
], Dispositivo.prototype, "marcas", void 0);
exports.Dispositivo = Dispositivo = __decorate([
    (0, typeorm_1.Entity)({ name: 'dispositivo' })
], Dispositivo);
//# sourceMappingURL=dispositivo.entity.js.map