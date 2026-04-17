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
exports.MarcasAuditoriaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const marcas_auditoria_entity_1 = require("./entities/marcas_auditoria.entity");
const typeorm_2 = require("typeorm");
let MarcasAuditoriaService = class MarcasAuditoriaService {
    marcasAuditoriaRepository;
    constructor(marcasAuditoriaRepository) {
        this.marcasAuditoriaRepository = marcasAuditoriaRepository;
    }
    create(createMarcasAuditoriaDto) {
        return 'This action adds a new marcasAuditoria';
    }
    async findAll(idMarca) {
        if (!idMarca) {
            return [];
        }
        const resultados = await this.marcasAuditoriaRepository.find({
            where: {
                marca: { marca_id: idMarca }
            }
        });
        return resultados.map((r) => {
            let fMarca = r.fecha_marca;
            if (fMarca instanceof Date) {
                fMarca = fMarca.toISOString().substring(0, 10);
            }
            else if (typeof fMarca === 'string') {
                fMarca = fMarca.substring(0, 10);
            }
            let fActualizacion = r.fecha_actualizacion;
            if (fActualizacion instanceof Date) {
                fActualizacion = fActualizacion.toISOString().substring(0, 19).replace('T', ' ');
            }
            else if (typeof fActualizacion === 'string') {
                fActualizacion = fActualizacion.substring(0, 19).replace('T', ' ');
            }
            return { ...r, fecha_marca: fMarca, fecha_actualizacion: fActualizacion };
        });
    }
    findOne(id) {
        return `This action returns a #${id} marcasAuditoria`;
    }
    update(id, updateMarcasAuditoriaDto) {
        return `This action updates a #${id} marcasAuditoria`;
    }
    remove(id) {
        return `This action removes a #${id} marcasAuditoria`;
    }
};
exports.MarcasAuditoriaService = MarcasAuditoriaService;
exports.MarcasAuditoriaService = MarcasAuditoriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marcas_auditoria_entity_1.MarcasAuditoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcasAuditoriaService);
//# sourceMappingURL=marcas_auditoria.service.js.map