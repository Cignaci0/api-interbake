import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoModule } from './empleado/empleado.module';
import { CencoModule } from './cenco/cenco.module';
import { DispositivoModule } from './dispositivo/dispositivo.module';
import { CargoModule } from './cargo/cargo.module';
import { Empleado } from './empleado/entities/empleado.entity';
import { Cenco } from './cenco/entities/cenco.entity';
import { Dispositivo } from './dispositivo/entities/dispositivo.entity';
import { Cargo } from './cargo/entities/cargo.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';
import { EmpleadoDispositivoModule } from './empleado_dispositivo/empleado_dispositivo.module';
import { CargoDispositivoModule } from './cargo_dispositivo/cargo_dispositivo.module';
import { EmpleadoDispositivo } from './empleado_dispositivo/entities/empleado_dispositivo.entity';
import { CargoDispositivo } from './cargo_dispositivo/entities/cargo_dispositivo.entity';
import { DetalleTurnoModule } from './detalle_turno/detalle_turno.module';
import { HorarioModule } from './horario/horario.module';
import { TurnoModule } from './turno/turno.module';
import { DetalleTurno } from './detalle_turno/entities/detalle_turno.entity';
import { Horario } from './horario/entities/horario.entity';
import { Turno } from './turno/entities/turno.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'superadmin',
      database: 'interbake',
      synchronize: false,
      entities: [Empleado, Cenco, Dispositivo, Cargo, Usuario, EmpleadoDispositivo, CargoDispositivo, DetalleTurno, Horario, Turno],
    }),
    EmpleadoModule,
    CencoModule,
    DispositivoModule,
    CargoModule,
    UsuarioModule,
    AuthModule,
    EmpleadoDispositivoModule,
    CargoDispositivoModule,
    DetalleTurnoModule,
    HorarioModule,
    TurnoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
