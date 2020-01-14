
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) 
    private readonly todosRepository: Repository<Todo>) { }

  showTodos(): Promise<Todo[]> {
    console.log(this.todosRepository)
    return this.todosRepository.find();
  }
}
