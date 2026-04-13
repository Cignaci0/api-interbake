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
exports.CargoDispositivo = void 0;
const typeorm_1 = require("typeorm");
let CargoDispositivo = class CargoDispositivo {
    id;
    cargo_id;
    dispositivo_id;
};
exports.CargoDispositivo = CargoDispositivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CargoDispositivo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CargoDispositivo.prototype, "cargo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CargoDispositivo.prototype, "dispositivo_id", void 0);
exports.CargoDispositivo = CargoDispositivo = __decorate([
    (0, typeorm_1.Entity)({ name: 'cargo_dispositivo' })
], CargoDispositivo);
//# sourceMappingURL=cargo_dispositivo.entity.js.map