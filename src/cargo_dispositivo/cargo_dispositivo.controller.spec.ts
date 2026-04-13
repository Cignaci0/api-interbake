import { Test, TestingModule } from '@nestjs/testing';
import { CargoDispositivoController } from './cargo_dispositivo.controller';
import { CargoDispositivoService } from './cargo_dispositivo.service';

describe('CargoDispositivoController', () => {
  let controller: CargoDispositivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CargoDispositivoController],
      providers: [CargoDispositivoService],
    }).compile();

    controller = module.get<CargoDispositivoController>(CargoDispositivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
