import { Test, TestingModule } from '@nestjs/testing';
import { SchedulersController } from './schedulers.controller';
import { SchedulersService } from './schedulers.service';

describe('SchedulersController', () => {
  let schedulersController: SchedulersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SchedulersController],
      providers: [SchedulersService],
    }).compile();

    schedulersController = app.get<SchedulersController>(SchedulersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(schedulersController.getHello()).toBe('Hello World!');
    });
  });
});
