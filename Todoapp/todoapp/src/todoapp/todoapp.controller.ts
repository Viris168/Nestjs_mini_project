import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodoappService } from './todoapp.service.js';
import type { Filter, Todo } from './todoapp.model.js';
import { TodoAppResponeseDto } from './dto/todos-response.dtos.js';
import { createTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/updatedto.js';

@Controller('todoapp')
export class TodoappController {
    constructor(private todoapp: TodoappService){}

    @Get()
    getAlltodoapps(@Query('filter') filter: Filter): TodoAppResponeseDto{
        const todos = this.todoapp.findAll(filter);
        return new TodoAppResponeseDto(todos);
    }

    @Post()
    createTodo(@Body() createTodo: createTodoDto){
        return this.todoapp.createTodo(createTodo);
    }

    @Put(':id')
    updateTodo(@Param('id') id:string , @Body() updateTodo: UpdateTodoDto) : Todo{
        return this.todoapp.updateTodo(id, updateTodo);
    }
}
