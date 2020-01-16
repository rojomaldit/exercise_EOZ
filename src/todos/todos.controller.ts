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
  async getAll() {
    return await this.service.allTodos()
  }
  
  @Post()
  async create(@Body() todo: Todo) {
    await this.service.createTodo(todo);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number){
    await this.service.deleteTodo(id);
  }

  @Delete()
  async deleteAll(){
    await this.service.deleteAll();
  }
  
}
