
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) 
    private readonly todosRepository: Repository<Todo>) { }

  allTodos(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  createTodo(todo): Promise<Todo> {
    return this.todosRepository.save(todo)
  }

  deleteTodo(id: number): void {
    this.todosRepository.delete(id)
  }
}
