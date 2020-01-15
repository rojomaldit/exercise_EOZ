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

@Controller('todo')
export class TodosController {
  constructor(private service: TodosService) { }

  @Get()
  getAll() {
    var a = this.service.allTodos()
    return a
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
  deleteAll(){
    this.service.deleteAll();
  }
  
}
