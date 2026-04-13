import { Test, TestingModule } from '@nestjs/testing';
import { CargoDispositivoService } from './cargo_dispositivo.service';

describe('CargoDispositivoService', () => {
  let service: CargoDispositivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CargoDispositivoService],
    }).compile();

    service = module.get<CargoDispositivoService>(CargoDispositivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
