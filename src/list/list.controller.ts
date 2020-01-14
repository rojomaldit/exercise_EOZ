import { Controller, Get, Post } from '@nestjs/common';

@Controller('list')
export class ListController {
    @Get()
    getTasks(): string {
      return "Here list the list of to-dos";
    }

    @Post()
    createTask(): string {
        return "Here create a new to-do"
    }
}
