import { Test, TestingModule } from '@nestjs/testing';
import { ConstractsService } from './constracts.service';

describe('ConstractsService', () => {
  let service: ConstractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstractsService],
    }).compile();

    service = module.get<ConstractsService>(ConstractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
