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
exports.CencoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cenco_entity_1 = require("./entities/cenco.entity");
const typeorm_2 = require("typeorm");
let CencoService = class CencoService {
    cencoRepository;
    create(createCencoDto) {
        return 'This action adds a new cenco';
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.cencoRepository.findAndCount({
            order: {
                cenco_id: 'ASC'
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
        return `This action returns a #${id} cenco`;
    }
    update(id, updateCencoDto) {
        return `This action updates a #${id} cenco`;
    }
    remove(id) {
        const cenco = this.cencoRepository.findOne({ where: { cenco_id: id } });
        if (!cenco) {
            throw new Error('Cenco no encontrado');
        }
        return this.cencoRepository.delete(id);
    }
};
exports.CencoService = CencoService;
__decorate([
    (0, typeorm_1.InjectRepository)(cenco_entity_1.Cenco),
    __metadata("design:type", typeorm_2.Repository)
], CencoService.prototype, "cencoRepository", void 0);
exports.CencoService = CencoService = __decorate([
    (0, common_1.Injectable)()
], CencoService);
//# sourceMappingURL=cenco.service.js.map