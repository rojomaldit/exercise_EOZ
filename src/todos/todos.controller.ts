import { 
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { stringify } from 'querystring';

@Controller('todo')
export class TodosController {
  constructor(private service: TodosService) { }

  @Get()
  getAll() {
    return this.service.allTodos()
  }
  
  @Post()
  create(@Body() todo: Todo) {
    this.service.createTodo(todo);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number){
    this.service.deleteTodo(id);
  }

  @Delete()
  async deleteAll(){
    await this.service.deleteAll();
  }
  
}
