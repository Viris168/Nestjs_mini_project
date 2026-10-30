import { Test, TestingModule } from '@nestjs/testing';
import { TodoappController } from './todoapp.controller.js';
import { TodoappService } from './todoapp.service.js';

describe('TodoappController', () => {
  let controller: TodoappController;
  let todo: TodoappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoappController],
      providers: [TodoappService],
    }).compile();

    controller = module.get<TodoappController>(TodoappController);
    todo = module.get<TodoappService>(TodoappService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
