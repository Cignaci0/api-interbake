import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoDispositivoService } from './empleado_dispositivo.service';

describe('EmpleadoDispositivoService', () => {
  let service: EmpleadoDispositivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleadoDispositivoService],
    }).compile();

    service = module.get<EmpleadoDispositivoService>(EmpleadoDispositivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
