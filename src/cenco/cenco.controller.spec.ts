import { Test, TestingModule } from '@nestjs/testing';
import { CencoController } from './cenco.controller';
import { CencoService } from './cenco.service';

describe('CencoController', () => {
  let controller: CencoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CencoController],
      providers: [CencoService],
    }).compile();

    controller = module.get<CencoController>(CencoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
