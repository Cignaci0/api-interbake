import { Test, TestingModule } from '@nestjs/testing';
import { DetalleTurnoController } from './detalle_turno.controller';
import { DetalleTurnoService } from './detalle_turno.service';

describe('DetalleTurnoController', () => {
  let controller: DetalleTurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleTurnoController],
      providers: [DetalleTurnoService],
    }).compile();

    controller = module.get<DetalleTurnoController>(DetalleTurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
