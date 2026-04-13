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
exports.DispositivoController = void 0;
const common_1 = require("@nestjs/common");
const dispositivo_service_1 = require("./dispositivo.service");
const create_dispositivo_dto_1 = require("./dto/create-dispositivo.dto");
const update_dispositivo_dto_1 = require("./dto/update-dispositivo.dto");
let DispositivoController = class DispositivoController {
    dispositivoService;
    constructor(dispositivoService) {
        this.dispositivoService = dispositivoService;
    }
    create(createDispositivoDto) {
        return this.dispositivoService.create(createDispositivoDto);
    }
    findAll() {
        return this.dispositivoService.findAll();
    }
    findOne(id) {
        return this.dispositivoService.findOne(+id);
    }
    update(id, updateDispositivoDto) {
        return this.dispositivoService.update(+id, updateDispositivoDto);
    }
    remove(id) {
        return this.dispositivoService.remove(+id);
    }
};
exports.DispositivoController = DispositivoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dispositivo_dto_1.CreateDispositivoDto]),
    __metadata("design:returntype", void 0)
], DispositivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DispositivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DispositivoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dispositivo_dto_1.UpdateDispositivoDto]),
    __metadata("design:returntype", void 0)
], DispositivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DispositivoController.prototype, "remove", null);
exports.DispositivoController = DispositivoController = __decorate([
    (0, common_1.Controller)('dispositivo'),
    __metadata("design:paramtypes", [dispositivo_service_1.DispositivoService])
], DispositivoController);
//# sourceMappingURL=dispositivo.controller.js.map