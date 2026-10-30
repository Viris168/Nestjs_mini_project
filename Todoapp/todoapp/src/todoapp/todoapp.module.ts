import { Module } from '@nestjs/common';
import { TodoappController } from './todoapp.controller.js';
import { TodoappService } from './todoapp.service.js';

@Module({
  controllers: [TodoappController],
  providers: [TodoappService]
})
export class TodoappModule {}
