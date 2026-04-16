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
exports.Usuario = void 0;
const cenco_entity_1 = require("../../cenco/entities/cenco.entity");
const empleado_entity_1 = require("../../empleado/entities/empleado.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    usuario_id;
    username;
    password;
    estado;
    apellido_paterno;
    apellido_materno;
    nombres;
    email;
    perfil_id;
    run;
    reset_token;
    reset_token_expires;
    empleado;
    cencos;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_materno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre' }),
    __metadata("design:type", String)
], Usuario.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usuario.prototype, "perfil_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "run", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        name: 'reset_token'
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "reset_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
        name: 'reset_token_expires'
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "reset_token_expires", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => empleado_entity_1.Empleado, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'empleado_id' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], Usuario.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cenco_entity_1.Cenco, (cenco) => cenco.usuarios),
    (0, typeorm_1.JoinTable)({
        name: 'usuario_has_cenco',
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'usuario_id'
        },
        inverseJoinColumn: {
            name: 'cenco_id',
            referencedColumnName: 'cenco_id'
        }
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "cencos", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuario' })
], Usuario);
//# sourceMappingURL=usuario.entity.js.map