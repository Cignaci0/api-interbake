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
exports.Empleado = void 0;
const cargo_entity_1 = require("../../cargo/entities/cargo.entity");
const cenco_entity_1 = require("../../cenco/entities/cenco.entity");
const typeorm_1 = require("typeorm");
let Empleado = class Empleado {
    empleado_id;
    fecha_nacimiento;
    direccion;
    sexo;
    telefono_fijo;
    telefono_movil;
    comuna;
    fecha_ini_contrato;
    fecha_fin_contrato;
    contrato_indefinido;
    art_22;
    run;
    clave;
    nombres;
    apellido_paterno;
    apellido_materno;
    cargo_id;
    email;
    email_laboral;
    num_ficha;
    cenco_id;
    email_noti;
};
exports.Empleado = Empleado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empleado.prototype, "empleado_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Empleado.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Empleado.prototype, "telefono_fijo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Empleado.prototype, "telefono_movil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "comuna", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Empleado.prototype, "fecha_ini_contrato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Empleado.prototype, "fecha_fin_contrato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Empleado.prototype, "contrato_indefinido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Empleado.prototype, "art_22", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "run", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Empleado.prototype, "clave", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "apellido_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "apellido_materno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cargo_entity_1.Cargo, (cargo) => cargo.empleados),
    (0, typeorm_1.JoinColumn)({ name: 'cargo_id' }),
    __metadata("design:type", cargo_entity_1.Cargo)
], Empleado.prototype, "cargo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "email_laboral", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Empleado.prototype, "num_ficha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cenco_entity_1.Cenco, (cenco) => cenco.empleados),
    (0, typeorm_1.JoinColumn)({ name: 'cenco_id' }),
    __metadata("design:type", cenco_entity_1.Cenco)
], Empleado.prototype, "cenco_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "email_noti", void 0);
exports.Empleado = Empleado = __decorate([
    (0, typeorm_1.Entity)({ name: 'empleado' })
], Empleado);
//# sourceMappingURL=empleado.entity.js.map