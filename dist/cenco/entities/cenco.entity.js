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
exports.Cenco = void 0;
const dispositivo_entity_1 = require("../../dispositivo/entities/dispositivo.entity");
const empleado_entity_1 = require("../../empleado/entities/empleado.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Cenco = class Cenco {
    cenco_id;
    nombre;
    direccion;
    region;
    comuna;
    email_general;
    email_notificacion;
    zona_extrema;
    estado;
    empleados;
    dispositivos;
    usuarios;
};
exports.Cenco = Cenco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cenco.prototype, "cenco_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "comuna", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "email_general", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cenco.prototype, "email_notificacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Cenco.prototype, "zona_extrema", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cenco.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => empleado_entity_1.Empleado, (empleado) => empleado.cenco_id),
    __metadata("design:type", Array)
], Cenco.prototype, "empleados", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dispositivo_entity_1.Dispositivo, (dispositivo) => dispositivo.cenco_id),
    __metadata("design:type", Array)
], Cenco.prototype, "dispositivos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_entity_1.Usuario, (usuario) => usuario.cencos),
    __metadata("design:type", Array)
], Cenco.prototype, "usuarios", void 0);
exports.Cenco = Cenco = __decorate([
    (0, typeorm_1.Entity)({ name: 'cenco' })
], Cenco);
//# sourceMappingURL=cenco.entity.js.map