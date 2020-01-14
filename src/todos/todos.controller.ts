import { 
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodosController {

  constructor(private service: TodosService) { }

  @Get()
  get(todo) {
    return this.service.allTodos();
  }
  
  @Post()
  create(@Body() todo: Todo) {
    return this.service.createTodo(todo);
  }
  
}
