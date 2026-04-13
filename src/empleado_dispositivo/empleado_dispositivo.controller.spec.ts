import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoDispositivoController } from './empleado_dispositivo.controller';
import { EmpleadoDispositivoService } from './empleado_dispositivo.service';

describe('EmpleadoDispositivoController', () => {
  let controller: EmpleadoDispositivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpleadoDispositivoController],
      providers: [EmpleadoDispositivoService],
    }).compile();

    controller = module.get<EmpleadoDispositivoController>(EmpleadoDispositivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
