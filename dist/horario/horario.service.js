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
exports.HorarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const horario_entity_1 = require("./entities/horario.entity");
const typeorm_2 = require("typeorm");
let HorarioService = class HorarioService {
    horarioRepository;
    create(createHorarioDto) {
        const horario = this.horarioRepository.create(createHorarioDto);
        return this.horarioRepository.save(horario);
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.horarioRepository.findAndCount({
            order: {
                horario_id: 'ASC'
            },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            data,
            total,
            totalPages: Math.ceil(total / limit),
            page,
        };
    }
    findOne(id) {
        const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
        if (!horario) {
            throw new Error('Horario no encontrado');
        }
        return horario;
    }
    update(id, updateHorarioDto) {
        const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
        if (!horario) {
            throw new Error('Horario no encontrado');
        }
        return this.horarioRepository.update(id, updateHorarioDto);
    }
    remove(id) {
        const horario = this.horarioRepository.findOne({ where: { horario_id: id } });
        if (!horario) {
            throw new Error('Horario no encontrado');
        }
        return this.horarioRepository.delete(id);
    }
};
exports.HorarioService = HorarioService;
__decorate([
    (0, typeorm_1.InjectRepository)(horario_entity_1.Horario),
    __metadata("design:type", typeorm_2.Repository)
], HorarioService.prototype, "horarioRepository", void 0);
exports.HorarioService = HorarioService = __decorate([
    (0, common_1.Injectable)()
], HorarioService);
//# sourceMappingURL=horario.service.js.map