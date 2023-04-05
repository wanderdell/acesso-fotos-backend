import { Test, TestingModule } from '@nestjs/testing';
import { ConstractsController } from './constracts.controller';
import { ConstractsService } from './constracts.service';

describe('ConstractsController', () => {
  let controller: ConstractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstractsController],
      providers: [ConstractsService],
    }).compile();

    controller = module.get<ConstractsController>(ConstractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
