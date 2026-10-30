import type { Todo } from '../todoapp.model.js';

export class TodoAppResponeseDto {
    todos: Todo[];
    total: number;

    constructor(todos: Todo[]){
        this.todos = todos;
        this.total = todos.length;
    }
    
}

