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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoDispositivoController = void 0;
const common_1 = require("@nestjs/common");
const cargo_dispositivo_service_1 = require("./cargo_dispositivo.service");
const create_cargo_dispositivo_dto_1 = require("./dto/create-cargo_dispositivo.dto");
const update_cargo_dispositivo_dto_1 = require("./dto/update-cargo_dispositivo.dto");
let CargoDispositivoController = class CargoDispositivoController {
    cargoDispositivoService;
    constructor(cargoDispositivoService) {
        this.cargoDispositivoService = cargoDispositivoService;
    }
    create(createCargoDispositivoDto) {
        return this.cargoDispositivoService.create(createCargoDispositivoDto);
    }
    findAll() {
        return this.cargoDispositivoService.findAll();
    }
    findOne(id) {
        return this.cargoDispositivoService.findOne(+id);
    }
    update(id, updateCargoDispositivoDto) {
        return this.cargoDispositivoService.update(+id, updateCargoDispositivoDto);
    }
    remove(id) {
        return this.cargoDispositivoService.remove(+id);
    }
};
exports.CargoDispositivoController = CargoDispositivoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cargo_dispositivo_dto_1.CreateCargoDispositivoDto]),
    __metadata("design:returntype", void 0)
], CargoDispositivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CargoDispositivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargoDispositivoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cargo_dispositivo_dto_1.UpdateCargoDispositivoDto]),
    __metadata("design:returntype", void 0)
], CargoDispositivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargoDispositivoController.prototype, "remove", null);
exports.CargoDispositivoController = CargoDispositivoController = __decorate([
    (0, common_1.Controller)('cargo-dispositivo'),
    __metadata("design:paramtypes", [cargo_dispositivo_service_1.CargoDispositivoService])
], CargoDispositivoController);
//# sourceMappingURL=cargo_dispositivo.controller.js.map