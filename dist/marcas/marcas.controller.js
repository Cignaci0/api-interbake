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
exports.MarcasController = void 0;
const common_1 = require("@nestjs/common");
const marcas_service_1 = require("./marcas.service");
const create_marca_dto_1 = require("./dto/create-marca.dto");
const update_marca_dto_1 = require("./dto/update-marca.dto");
let MarcasController = class MarcasController {
    marcasService;
    constructor(marcasService) {
        this.marcasService = marcasService;
    }
    create(createMarcaDto) {
        return this.marcasService.create(createMarcaDto);
    }
    findAll(numFicha, fechaInicio, fechaFin) {
        return this.marcasService.findAll(numFicha, fechaInicio, fechaFin);
    }
    confirmarCambio(token, accion) {
        return this.marcasService.confirmarCambio(token, accion);
    }
    findOne(id) {
        return this.marcasService.findOne(+id);
    }
    update(id, updateMarcaDto) {
        return this.marcasService.update(+id, updateMarcaDto);
    }
    remove(id) {
        return this.marcasService.remove(+id);
    }
};
exports.MarcasController = MarcasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_marca_dto_1.CreateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('numFicha')),
    __param(1, (0, common_1.Query)('fechaInicio')),
    __param(2, (0, common_1.Query)('fechaFin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('confirmar'),
    __param(0, (0, common_1.Query)('token')),
    __param(1, (0, common_1.Query)('accion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "confirmarCambio", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_marca_dto_1.UpdateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "remove", null);
exports.MarcasController = MarcasController = __decorate([
    (0, common_1.Controller)('marcas'),
    __metadata("design:paramtypes", [marcas_service_1.MarcasService])
], MarcasController);
//# sourceMappingURL=marcas.controller.js.map