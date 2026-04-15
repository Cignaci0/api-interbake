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
exports.HorarioController = void 0;
const common_1 = require("@nestjs/common");
const horario_service_1 = require("./horario.service");
const create_horario_dto_1 = require("./dto/create-horario.dto");
const update_horario_dto_1 = require("./dto/update-horario.dto");
let HorarioController = class HorarioController {
    horarioService;
    constructor(horarioService) {
        this.horarioService = horarioService;
    }
    create(createHorarioDto) {
        return this.horarioService.create(createHorarioDto);
    }
    findAll(page = 1, limit = 10) {
        return this.horarioService.findAll(page, limit);
    }
    findOne(id) {
        return this.horarioService.findOne(+id);
    }
    update(id, updateHorarioDto) {
        return this.horarioService.update(+id, updateHorarioDto);
    }
    remove(id) {
        return this.horarioService.remove(+id);
    }
};
exports.HorarioController = HorarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_horario_dto_1.CreateHorarioDto]),
    __metadata("design:returntype", void 0)
], HorarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HorarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HorarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_horario_dto_1.UpdateHorarioDto]),
    __metadata("design:returntype", void 0)
], HorarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HorarioController.prototype, "remove", null);
exports.HorarioController = HorarioController = __decorate([
    (0, common_1.Controller)('horario'),
    __metadata("design:paramtypes", [horario_service_1.HorarioService])
], HorarioController);
//# sourceMappingURL=horario.controller.js.map