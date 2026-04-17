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
exports.MarcasAuditoria = void 0;
const typeorm_1 = require("typeorm");
const marca_entity_1 = require("../../marcas/entities/marca.entity");
let MarcasAuditoria = class MarcasAuditoria {
    correlativo;
    marca;
    fecha_marca;
    hora_marca;
    evento;
    hashcode;
    num_ficha;
    fecha_actualizacion;
    usuario_actualizador;
    token;
    id_tipo_marca;
    info_adicional;
    comentario;
    estado;
    datos_update;
};
exports.MarcasAuditoria = MarcasAuditoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MarcasAuditoria.prototype, "correlativo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => marca_entity_1.Marca),
    (0, typeorm_1.JoinColumn)({ name: 'id_marca' }),
    __metadata("design:type", marca_entity_1.Marca)
], MarcasAuditoria.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MarcasAuditoria.prototype, "fecha_marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "hora_marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MarcasAuditoria.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "hashcode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "num_ficha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MarcasAuditoria.prototype, "fecha_actualizacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "usuario_actualizador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], MarcasAuditoria.prototype, "id_tipo_marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "info_adicional", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MarcasAuditoria.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado', default: 3 }),
    __metadata("design:type", Number)
], MarcasAuditoria.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], MarcasAuditoria.prototype, "datos_update", void 0);
exports.MarcasAuditoria = MarcasAuditoria = __decorate([
    (0, typeorm_1.Entity)({ name: 'marcas_auditoria' })
], MarcasAuditoria);
//# sourceMappingURL=marcas_auditoria.entity.js.map