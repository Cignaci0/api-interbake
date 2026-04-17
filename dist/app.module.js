"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const empleado_module_1 = require("./empleado/empleado.module");
const cenco_module_1 = require("./cenco/cenco.module");
const dispositivo_module_1 = require("./dispositivo/dispositivo.module");
const cargo_module_1 = require("./cargo/cargo.module");
const empleado_entity_1 = require("./empleado/entities/empleado.entity");
const cenco_entity_1 = require("./cenco/entities/cenco.entity");
const dispositivo_entity_1 = require("./dispositivo/entities/dispositivo.entity");
const cargo_entity_1 = require("./cargo/entities/cargo.entity");
const usuario_module_1 = require("./usuario/usuario.module");
const usuario_entity_1 = require("./usuario/entities/usuario.entity");
const auth_module_1 = require("./auth/auth.module");
const empleado_dispositivo_module_1 = require("./empleado_dispositivo/empleado_dispositivo.module");
const cargo_dispositivo_module_1 = require("./cargo_dispositivo/cargo_dispositivo.module");
const empleado_dispositivo_entity_1 = require("./empleado_dispositivo/entities/empleado_dispositivo.entity");
const cargo_dispositivo_entity_1 = require("./cargo_dispositivo/entities/cargo_dispositivo.entity");
const detalle_turno_module_1 = require("./detalle_turno/detalle_turno.module");
const horario_module_1 = require("./horario/horario.module");
const turno_module_1 = require("./turno/turno.module");
const detalle_turno_entity_1 = require("./detalle_turno/entities/detalle_turno.entity");
const horario_entity_1 = require("./horario/entities/horario.entity");
const turno_entity_1 = require("./turno/entities/turno.entity");
const marcas_module_1 = require("./marcas/marcas.module");
const marca_entity_1 = require("./marcas/entities/marca.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const marcas_auditoria_module_1 = require("./marcas_auditoria/marcas_auditoria.module");
const marcas_auditoria_entity_1 = require("./marcas_auditoria/entities/marcas_auditoria.entity");
const schedule_1 = require("@nestjs/schedule");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'superadmin',
                database: 'interbake',
                synchronize: false,
                entities: [empleado_entity_1.Empleado, cenco_entity_1.Cenco, dispositivo_entity_1.Dispositivo, cargo_entity_1.Cargo, usuario_entity_1.Usuario, empleado_dispositivo_entity_1.EmpleadoDispositivo, cargo_dispositivo_entity_1.CargoDispositivo, detalle_turno_entity_1.DetalleTurno, horario_entity_1.Horario, turno_entity_1.Turno, marca_entity_1.Marca, marcas_auditoria_entity_1.MarcasAuditoria],
            }),
            schedule_1.ScheduleModule.forRoot(),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'soportefemasetest@gmail.com',
                        pass: 'mskobvyknfujvshj'
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                },
                defaults: {
                    from: '"Soporte FEMASE" <soportefemasetest@gmail.com>'
                }
            }),
            empleado_module_1.EmpleadoModule,
            cenco_module_1.CencoModule,
            dispositivo_module_1.DispositivoModule,
            cargo_module_1.CargoModule,
            usuario_module_1.UsuarioModule,
            auth_module_1.AuthModule,
            empleado_dispositivo_module_1.EmpleadoDispositivoModule,
            cargo_dispositivo_module_1.CargoDispositivoModule,
            detalle_turno_module_1.DetalleTurnoModule,
            horario_module_1.HorarioModule,
            turno_module_1.TurnoModule,
            marcas_module_1.MarcasModule,
            marcas_auditoria_module_1.MarcasAuditoriaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map