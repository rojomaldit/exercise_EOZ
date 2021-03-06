
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import e = require('express');

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) 
    private readonly todosRepository: Repository<Todo>) { }

  allTodos(): Promise<Todo[]> {
    return this.todosRepository.find({'deleted': 0})
  }

  async createTodo(todo): Promise<Todo> {
    var elems = await this.todosRepository.find();
    elems.forEach(e => { if(e.id == todo.id) return null });
    return this.todosRepository.save(todo);
  }

  async deleteTodo(id: number): Promise<Todo[]> {
    let todo = await this.todosRepository.findOneOrFail({'id': id});
    todo.deleted = 1;
    await this.todosRepository.save(todo);
    return null;
  }

  deleteAll(): void {
    this.todosRepository.clear()
  }
}
