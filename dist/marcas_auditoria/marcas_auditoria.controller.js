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
exports.MarcasAuditoriaController = void 0;
const common_1 = require("@nestjs/common");
const marcas_auditoria_service_1 = require("./marcas_auditoria.service");
const create_marcas_auditoria_dto_1 = require("./dto/create-marcas_auditoria.dto");
const update_marcas_auditoria_dto_1 = require("./dto/update-marcas_auditoria.dto");
let MarcasAuditoriaController = class MarcasAuditoriaController {
    marcasAuditoriaService;
    constructor(marcasAuditoriaService) {
        this.marcasAuditoriaService = marcasAuditoriaService;
    }
    create(createMarcasAuditoriaDto) {
        return this.marcasAuditoriaService.create(createMarcasAuditoriaDto);
    }
    findAll(idMarca) {
        return this.marcasAuditoriaService.findAll(idMarca);
    }
    findOne(id) {
        return this.marcasAuditoriaService.findOne(+id);
    }
    update(id, updateMarcasAuditoriaDto) {
        return this.marcasAuditoriaService.update(+id, updateMarcasAuditoriaDto);
    }
    remove(id) {
        return this.marcasAuditoriaService.remove(+id);
    }
};
exports.MarcasAuditoriaController = MarcasAuditoriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_marcas_auditoria_dto_1.CreateMarcasAuditoriaDto]),
    __metadata("design:returntype", void 0)
], MarcasAuditoriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('idMarca')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarcasAuditoriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarcasAuditoriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_marcas_auditoria_dto_1.UpdateMarcasAuditoriaDto]),
    __metadata("design:returntype", void 0)
], MarcasAuditoriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarcasAuditoriaController.prototype, "remove", null);
exports.MarcasAuditoriaController = MarcasAuditoriaController = __decorate([
    (0, common_1.Controller)('marcas-auditoria'),
    __metadata("design:paramtypes", [marcas_auditoria_service_1.MarcasAuditoriaService])
], MarcasAuditoriaController);
//# sourceMappingURL=marcas_auditoria.controller.js.map