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
  get() {
    var a = this.service.allTodos()
    return a
  }
  
  @Post()
  create(@Body() todo: Todo) {
    console.log("Me llamaste!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    this.service.createTodo(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    this.service.deleteTodo(id);
  }
  
}
