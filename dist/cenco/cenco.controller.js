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
exports.CencoController = void 0;
const common_1 = require("@nestjs/common");
const cenco_service_1 = require("./cenco.service");
const create_cenco_dto_1 = require("./dto/create-cenco.dto");
const update_cenco_dto_1 = require("./dto/update-cenco.dto");
let CencoController = class CencoController {
    cencoService;
    constructor(cencoService) {
        this.cencoService = cencoService;
    }
    create(createCencoDto) {
        return this.cencoService.create(createCencoDto);
    }
    findAll() {
        return this.cencoService.findAll();
    }
    findOne(id) {
        return this.cencoService.findOne(+id);
    }
    update(id, updateCencoDto) {
        return this.cencoService.update(+id, updateCencoDto);
    }
    remove(id) {
        return this.cencoService.remove(+id);
    }
};
exports.CencoController = CencoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cenco_dto_1.CreateCencoDto]),
    __metadata("design:returntype", void 0)
], CencoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CencoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CencoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cenco_dto_1.UpdateCencoDto]),
    __metadata("design:returntype", void 0)
], CencoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CencoController.prototype, "remove", null);
exports.CencoController = CencoController = __decorate([
    (0, common_1.Controller)('cenco'),
    __metadata("design:paramtypes", [cenco_service_1.CencoService])
], CencoController);
//# sourceMappingURL=cenco.controller.js.map