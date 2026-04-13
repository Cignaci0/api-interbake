import { Test, TestingModule } from '@nestjs/testing';
import { CencoService } from './cenco.service';

describe('CencoService', () => {
  let service: CencoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CencoService],
    }).compile();

    service = module.get<CencoService>(CencoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
