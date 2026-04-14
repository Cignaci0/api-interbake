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
exports.EmpleadoDispositivoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const empleado_dispositivo_entity_1 = require("./entities/empleado_dispositivo.entity");
const typeorm_2 = require("typeorm");
const empleado_entity_1 = require("../empleado/entities/empleado.entity");
const dispositivo_entity_1 = require("../dispositivo/entities/dispositivo.entity");
let EmpleadoDispositivoService = class EmpleadoDispositivoService {
    empleadoDispositivoRepository;
    empleadoRepository;
    dispositivoRepository;
    constructor(empleadoDispositivoRepository, empleadoRepository, dispositivoRepository) {
        this.empleadoDispositivoRepository = empleadoDispositivoRepository;
        this.empleadoRepository = empleadoRepository;
        this.dispositivoRepository = dispositivoRepository;
    }
    create(createEmpleadoDispositivoDto) {
        return 'This action adds a new empleadoDispositivo';
    }
    async asignacionEmpleadoDispositivo(idEmpleado, idsDispositivos) {
        const empleado = await this.empleadoRepository.findOne({ where: { empleado_id: idEmpleado } });
        if (!empleado) {
            throw new common_1.NotFoundException(`El empleado con id ${idEmpleado} no fue encontrado.`);
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
        await this.empleadoDispositivoRepository.delete({ empleado_id: idEmpleado });
        if (idsDispositivos && idsDispositivos.length > 0) {
            const nuevosRegistros = idsDispositivos.map(id => this.empleadoDispositivoRepository.create({
                empleado_id: idEmpleado,
                dispositivo_id: id,
            }));
            return await this.empleadoDispositivoRepository.save(nuevosRegistros);
        }
        return [];
    }
};
exports.EmpleadoDispositivoService = EmpleadoDispositivoService;
exports.EmpleadoDispositivoService = EmpleadoDispositivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empleado_dispositivo_entity_1.EmpleadoDispositivo)),
    __param(1, (0, typeorm_1.InjectRepository)(empleado_entity_1.Empleado)),
    __param(2, (0, typeorm_1.InjectRepository)(dispositivo_entity_1.Dispositivo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EmpleadoDispositivoService);
//# sourceMappingURL=empleado_dispositivo.service.js.map