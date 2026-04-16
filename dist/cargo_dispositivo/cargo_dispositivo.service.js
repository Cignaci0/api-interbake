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
exports.CargoDispositivoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cargo_dispositivo_entity_1 = require("./entities/cargo_dispositivo.entity");
const cargo_entity_1 = require("../cargo/entities/cargo.entity");
const dispositivo_entity_1 = require("../dispositivo/entities/dispositivo.entity");
const typeorm_2 = require("typeorm");
let CargoDispositivoService = class CargoDispositivoService {
    cargoDispositivoRepository;
    cargoRepository;
    dispositivoRepository;
    constructor(cargoDispositivoRepository, cargoRepository, dispositivoRepository) {
        this.cargoDispositivoRepository = cargoDispositivoRepository;
        this.cargoRepository = cargoRepository;
        this.dispositivoRepository = dispositivoRepository;
    }
    create(createCargoDispositivoDto) {
        return 'This action adds a new cargoDispositivo';
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.cargoDispositivoRepository.findAndCount({
            order: {
                id: 'ASC'
            },
            relations: ['cargo_id', 'dispositivo_id'],
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
    async update(id, updateCargoDispositivoDto) {
        const registro = await this.cargoDispositivoRepository.findOne({ where: { id: id } });
        if (!registro) {
            throw new common_1.NotFoundException(`No se encontro ningun registro con el id ${id}`);
        }
        return this.cargoDispositivoRepository.update(id, updateCargoDispositivoDto);
    }
    async remove(id) {
        const registro = await this.cargoDispositivoRepository.findOne({ where: { id: id } });
        if (!registro) {
            throw new common_1.NotFoundException(`No se encontro ningun registro con el id ${id}`);
        }
        return this.cargoDispositivoRepository.delete(id);
    }
    async asignacioCargoDispositivo(idCargo, idsDispositivos) {
        const cargo = await this.cargoRepository.findOne({ where: { cargo_id: idCargo } });
        if (!cargo) {
            throw new common_1.NotFoundException(`El cargo con id ${idCargo} no fue encontrado.`);
        }
        if (idsDispositivos && idsDispositivos.length > 0) {
            const dispositivos = await this.dispositivoRepository.find({
                where: { dispositivo_id: (0, typeorm_2.In)(idsDispositivos) }
            });
            if (dispositivos.length !== idsDispositivos.length) {
                const idsEncontrados = dispositivos.map(d => d.dispositivo_id);
                const idsFaltantes = idsDispositivos.filter(id => !idsEncontrados.includes(id));
                throw new common_1.NotFoundException(`Los siguientes ids de dispositivos no existen: ${idsFaltantes.join(', ')}.`);
            }
        }
        await this.cargoDispositivoRepository
            .createQueryBuilder()
            .delete()
            .where('cargo_id = :idCargo', { idCargo })
            .execute();
        if (idsDispositivos && idsDispositivos.length > 0) {
            const nuevosRegistros = idsDispositivos.map(id => {
                return this.cargoDispositivoRepository.create({
                    cargo_id: { cargo_id: idCargo },
                    dispositivo_id: { dispositivo_id: id },
                });
            });
            return await this.cargoDispositivoRepository.save(nuevosRegistros);
        }
        return [];
    }
    async buscarPorCargo(idCargo) {
        const registros = await this.cargoDispositivoRepository
            .createQueryBuilder('cd')
            .leftJoinAndSelect('cd.cargo_id', 'cargo')
            .leftJoinAndSelect('cd.dispositivo_id', 'dispositivo')
            .where('cd.cargo_id = :idCargo', { idCargo })
            .getMany();
        if (!registros || registros.length === 0) {
            throw new common_1.NotFoundException(`El cargo con id ${idCargo} no tiene dispositivos asignados.`);
        }
        const result = registros.reduce((acc, registro) => {
            if (!acc.cargo_id) {
                acc.cargo_id = registro.cargo_id;
                acc.dispositivos = [];
            }
            acc.dispositivos.push(registro.dispositivo_id);
            return acc;
        }, {});
        return result;
    }
};
exports.CargoDispositivoService = CargoDispositivoService;
exports.CargoDispositivoService = CargoDispositivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cargo_dispositivo_entity_1.CargoDispositivo)),
    __param(1, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __param(2, (0, typeorm_1.InjectRepository)(dispositivo_entity_1.Dispositivo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CargoDispositivoService);
//# sourceMappingURL=cargo_dispositivo.service.js.map