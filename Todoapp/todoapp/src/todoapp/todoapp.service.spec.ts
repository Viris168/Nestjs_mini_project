import { Test, TestingModule } from '@nestjs/testing';
import { TodoappService } from './todoapp.service.js';


describe('TodoappService', () => {
  let service: TodoappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoappService],
    }).compile();

    service = module.get<TodoappService>(TodoappService);
    (service as any).todos = [
      {id: '1', title : "Todo1" , completed: false},
      {id: '2', title : "Todo2" , completed: true},
      {id: '3', title : "Todo3" , completed: false}
    ];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all todos when no filter is applied', () => {
    const result = service.findAll('all');
    expect(result.length).toBe(3);
  });

  it('should return only active todos when filter is "active"', () => {
    const result = service.findAll('active');
    expect(result.length).toBe(2);
    expect(result.every(todo => !todo.completed)).toBe(true);
  });

  it('should return only completed todos when filter is "completed"', () => {
    const result = service.findAll('completed');
    expect(result.length).toBe(1);
    expect(result.every(todo => todo.completed)).toBe(true);
  });  
});
