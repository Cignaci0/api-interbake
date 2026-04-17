"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const marca_entity_1 = require("./entities/marca.entity");
const typeorm_2 = require("typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const crypto = __importStar(require("crypto"));
const empleado_entity_1 = require("../empleado/entities/empleado.entity");
let MarcasService = class MarcasService {
    marcasRepository;
    mailerService;
    constructor(marcasRepository, mailerService) {
        this.marcasRepository = marcasRepository;
        this.mailerService = mailerService;
    }
    formatRUN(run) {
        if (!run)
            return run;
        let runStr = run.replace(/[^0-9Kk]/g, '');
        if (runStr.length <= 1)
            return runStr;
        const dv = runStr.slice(-1);
        const body = runStr.slice(0, -1);
        const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `${formattedBody}-${dv}`;
    }
    async create(createMarcaDto) {
        if (!createMarcaDto) {
            throw new common_1.HttpException('No se proporcionaron los datos para crear la marca', 404);
        }
        const nuevaMarca = this.marcasRepository.create(createMarcaDto);
        nuevaMarca.hashcode = crypto.createHash('md5').update(JSON.stringify(nuevaMarca.evento + ';' + nuevaMarca.fecha_marca + ';' + nuevaMarca.hora_marca + ';' + nuevaMarca.num_ficha + ';' + nuevaMarca.info_adicional + ';' + nuevaMarca.comentario)).digest('hex');
        const guardar = await this.marcasRepository.save(nuevaMarca);
        if (!guardar) {
            throw new common_1.HttpException('No se pudo crear la marca', 404);
        }
        try {
            const empleadoInfo = await this.marcasRepository.manager.findOne(empleado_entity_1.Empleado, {
                where: { num_ficha: nuevaMarca.num_ficha },
                relations: ['cenco_id']
            });
            if (empleadoInfo && empleadoInfo.email) {
                const correoEmpleado = empleadoInfo.email;
                const nombreEmpleado = empleadoInfo.nombres + ' ' + empleadoInfo.apellido_paterno + ' ' + empleadoInfo.apellido_materno;
                let eventoNombre = 'Marca';
                if (String(nuevaMarca.evento) === '1')
                    eventoNombre = 'Entrada';
                if (String(nuevaMarca.evento) === '2')
                    eventoNombre = 'Salida';
                let fMarca = nuevaMarca.fecha_marca;
                let fechaFormatString = '';
                if (fMarca instanceof Date) {
                    const day = String(fMarca.getDate()).padStart(2, '0');
                    const month = String(fMarca.getMonth() + 1).padStart(2, '0');
                    const year = fMarca.getFullYear();
                    fechaFormatString = `${day}/${month}/${year}`;
                }
                else if (typeof fMarca === 'string') {
                    const parts = fMarca.substring(0, 10).split('-');
                    if (parts.length === 3) {
                        fechaFormatString = `${parts[2]}/${parts[1]}/${parts[0]}`;
                    }
                    else {
                        fechaFormatString = fMarca;
                    }
                }
                const nombre_empresa = 'Interbake';
                const rut_empresa = '78544420-5';
                const direccion = 'ojos del salado 0851';
                const comuna = 'QUILICURA';
                await this.mailerService.sendMail({
                    to: correoEmpleado,
                    cc: empleadoInfo.email_noti,
                    subject: 'Nueva Marca Registrada',
                    html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Hola, ${nombreEmpleado}</h2>
            <p>Se ha creado una nueva marca en el sistema con los siguientes detalles:</p>
            <ul>
              <li><strong>Fecha:</strong> ${fechaFormatString}</li>
              <li><strong>Hora:</strong> ${nuevaMarca.hora_marca}</li>
              <li><strong>Run:</strong> ${this.formatRUN(empleadoInfo.run)}</li>
              <li><strong>Num ficha:</strong> ${empleadoInfo.num_ficha}</li>
              <li><strong>Nombre:</strong> ${nombreEmpleado}</li>
              <li><strong>Evento:</strong> ${eventoNombre}</li>
              <li><strong>Hashcode:</strong> ${nuevaMarca.hashcode}</li>
              <li><strong>Dirección:</strong> ${empleadoInfo.cenco_id?.direccion || 'NO APLICA'}</li>
            </ul>
            <p>Sistema exepcional de jordana: No Aplica</p>
            <p>Resolución Exenta: No Aplica</p>
            <p>Geolocalización: No Aplica</p>
            <p>Empleador:</p>
            <ul>
              <li><strong>Nombre Empresa:</strong> ${nombre_empresa}</li>
              <li><strong>Rut Empresa:</strong> ${rut_empresa}</li>
              <li><strong>Dirección Empresa:</strong> ${direccion}</li>
              <li><strong>Comuna Empresa:</strong> ${comuna}</li>
            </ul>
            <p>Empresa Transitoria o Subcontratado: NO APLICA</p>
            <p>Nombre: NO APLICA</p>
            <p>Rut: NO APLICA</p>
            <p>Si no reconoces esta marca o tienes dudas, puedes contactar al administrador.</p>
          </div>`,
                });
            }
        }
        catch (error) {
            console.error('Error al enviar correo de nueva marca:', error);
        }
        return { message: 'Marca creada exitosamente', data: guardar };
    }
    findAll() {
        return this.marcasRepository.find();
    }
    findOne(id) {
        return this.marcasRepository.findOne({ where: { marca_id: id } });
    }
    update(id, updateMarcaDto) {
        return this.marcasRepository.update(id, updateMarcaDto);
    }
    remove(id) {
        return this.marcasRepository.delete(id);
    }
};
exports.MarcasService = MarcasService;
exports.MarcasService = MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marca_entity_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], MarcasService);
//# sourceMappingURL=marcas.service.js.map