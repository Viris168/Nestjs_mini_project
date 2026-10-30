import { Injectable, NotFoundException } from '@nestjs/common';
import type { Todo, Filter } from './todoapp.model.js';
import { createTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/updatedto.js';
import { seedTodos } from './todoapp.seed.js';

@Injectable()
export class TodoappService {
    private todos: Todo[] = seedTodos.map((todo) => ({ ...todo }));

    findAll(filter: Filter) : Todo[] {
        let items = this.todos;
        if(filter === 'active') items = items.filter((todo) => !todo.completed);
        if(filter === 'completed') items = items.filter((todo) => todo.completed);
        return items;
    }

    createTodo(create : createTodoDto): Todo{
        const todos: Todo = {
            id: crypto.randomUUID(),
            title: create.title,
            completed: false,
            createAt: new Date(),
        };
        this.todos.push(todos);
        return todos;
    }

    updateTodo(id: string, updatedto: UpdateTodoDto): Todo {
        const todo = this.todos.find((t) => t.id === id);
        if (!todo) throw new NotFoundException('todo not found');
        Object.assign(todo, updatedto);
        return todo;
    }
}
