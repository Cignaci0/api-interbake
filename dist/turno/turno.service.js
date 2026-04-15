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
exports.TurnoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const turno_entity_1 = require("./entities/turno.entity");
const typeorm_2 = require("typeorm");
let TurnoService = class TurnoService {
    turnoRepository;
    create(createTurnoDto) {
        const turno = this.turnoRepository.create(createTurnoDto);
        return this.turnoRepository.save(turno);
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.turnoRepository.findAndCount({
            order: {
                turno_id: 'ASC'
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
        const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
        if (!turno) {
            throw new Error('Turno no encontrado');
        }
        return turno;
    }
    update(id, updateTurnoDto) {
        const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
        if (!turno) {
            throw new Error('Turno no encontrado');
        }
        return this.turnoRepository.update(id, updateTurnoDto);
    }
    remove(id) {
        const turno = this.turnoRepository.findOne({ where: { turno_id: id } });
        if (!turno) {
            throw new Error('Turno no encontrado');
        }
        return this.turnoRepository.delete(id);
    }
};
exports.TurnoService = TurnoService;
__decorate([
    (0, typeorm_1.InjectRepository)(turno_entity_1.Turno),
    __metadata("design:type", typeorm_2.Repository)
], TurnoService.prototype, "turnoRepository", void 0);
exports.TurnoService = TurnoService = __decorate([
    (0, common_1.Injectable)()
], TurnoService);
//# sourceMappingURL=turno.service.js.map