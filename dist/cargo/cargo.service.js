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
exports.CargoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cargo_entity_1 = require("./entities/cargo.entity");
const typeorm_2 = require("typeorm");
let CargoService = class CargoService {
    cargoRepository;
    constructor(cargoRepository) {
        this.cargoRepository = cargoRepository;
    }
    create(createCargoDto) {
        return this.cargoRepository.save(createCargoDto);
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.cargoRepository.findAndCount({
            order: {
                cargo_id: 'ASC'
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
    async findOne(id) {
        const registro = await this.cargoRepository.findOne({ where: { cargo_id: id } });
        if (!registro) {
            throw new common_1.NotFoundException(`No se encontro ningun registro con el id ${id}`);
        }
        return registro;
    }
    async update(id, updateCargoDto) {
        const registro = await this.cargoRepository.findOne({ where: { cargo_id: id } });
        if (!registro) {
            throw new common_1.NotFoundException(`No se encontro ningun registro con el id ${id}`);
        }
        return this.cargoRepository.update(id, updateCargoDto);
    }
    async remove(id) {
        const registro = await this.cargoRepository.findOne({ where: { cargo_id: id } });
        if (!registro) {
            throw new common_1.NotFoundException(`No se encontro ningun registro con el id ${id}`);
        }
        return this.cargoRepository.delete(id);
    }
};
exports.CargoService = CargoService;
exports.CargoService = CargoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CargoService);
//# sourceMappingURL=cargo.service.js.map