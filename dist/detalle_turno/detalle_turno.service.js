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
exports.DetalleTurnoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detalle_turno_entity_1 = require("./entities/detalle_turno.entity");
const typeorm_2 = require("typeorm");
const turno_entity_1 = require("../turno/entities/turno.entity");
const horario_entity_1 = require("../horario/entities/horario.entity");
let DetalleTurnoService = class DetalleTurnoService {
    detalleTurnoRepository;
    turnoRepository;
    horarioRepository;
    constructor(detalleTurnoRepository, turnoRepository, horarioRepository) {
        this.detalleTurnoRepository = detalleTurnoRepository;
        this.turnoRepository = turnoRepository;
        this.horarioRepository = horarioRepository;
    }
    create(createDetalleTurnoDto) {
        return 'This action adds a new detalleTurno';
    }
    findAll() {
        return `This action returns all detalleTurno`;
    }
    findOne(id) {
        return `This action returns a #${id} detalleTurno`;
    }
    update(id, updateDetalleTurnoDto) {
        return `This action updates a #${id} detalleTurno`;
    }
    remove(id) {
        return `This action removes a #${id} detalleTurno`;
    }
    async asignacionDetalleTurno(turnoId, codDias, idsHorarios) {
        if (codDias.length !== idsHorarios.length) {
            throw new common_1.NotFoundException(`La cantidad de cod_dia (${codDias.length}) y horario_id (${idsHorarios.length}) deben ser iguales.`);
        }
        const turno = await this.turnoRepository.findOne({ where: { turno_id: turnoId } });
        if (!turno) {
            throw new common_1.NotFoundException(`El turno con id ${turnoId} no fue encontrado.`);
        }
        const horarios = await this.horarioRepository.find({
            where: { horario_id: (0, typeorm_2.In)(idsHorarios) },
        });
        if (horarios.length !== new Set(idsHorarios).size) {
            const idsEncontrados = horarios.map(h => h.horario_id);
            const idsFaltantes = [...new Set(idsHorarios)].filter(id => !idsEncontrados.includes(id));
            throw new common_1.NotFoundException(`Los siguientes ids de horario no existen: ${idsFaltantes.join(', ')}.`);
        }
        await this.detalleTurnoRepository.delete({ turno_id: { turno_id: turnoId } });
        const nuevosRegistros = codDias.map((codDia, i) => this.detalleTurnoRepository.create({
            turno_id: { turno_id: turnoId },
            horario_id: { horario_id: idsHorarios[i] },
            cod_dia: codDia,
        }));
        return await this.detalleTurnoRepository.save(nuevosRegistros);
    }
    async buscarPorTurno(turnoId) {
        const detalles = await this.detalleTurnoRepository
            .createQueryBuilder('dt')
            .leftJoinAndSelect('dt.horario_id', 'horario')
            .where('dt.turno_id = :turnoId', { turnoId })
            .getMany();
        if (!detalles || detalles.length === 0) {
            throw new common_1.NotFoundException(`El turno con id ${turnoId} no fue encontrado.`);
        }
        return detalles;
    }
};
exports.DetalleTurnoService = DetalleTurnoService;
exports.DetalleTurnoService = DetalleTurnoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detalle_turno_entity_1.DetalleTurno)),
    __param(1, (0, typeorm_1.InjectRepository)(turno_entity_1.Turno)),
    __param(2, (0, typeorm_1.InjectRepository)(horario_entity_1.Horario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DetalleTurnoService);
//# sourceMappingURL=detalle_turno.service.js.map