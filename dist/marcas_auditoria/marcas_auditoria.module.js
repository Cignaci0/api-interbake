"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcasAuditoriaModule = void 0;
const common_1 = require("@nestjs/common");
const marcas_auditoria_service_1 = require("./marcas_auditoria.service");
const marcas_auditoria_controller_1 = require("./marcas_auditoria.controller");
const typeorm_1 = require("@nestjs/typeorm");
const marcas_auditoria_entity_1 = require("./entities/marcas_auditoria.entity");
const marca_entity_1 = require("../marcas/entities/marca.entity");
let MarcasAuditoriaModule = class MarcasAuditoriaModule {
};
exports.MarcasAuditoriaModule = MarcasAuditoriaModule;
exports.MarcasAuditoriaModule = MarcasAuditoriaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([marcas_auditoria_entity_1.MarcasAuditoria, marca_entity_1.Marca])
        ],
        controllers: [marcas_auditoria_controller_1.MarcasAuditoriaController],
        providers: [marcas_auditoria_service_1.MarcasAuditoriaService],
    })
], MarcasAuditoriaModule);
//# sourceMappingURL=marcas_auditoria.module.js.map