import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('list')
export class ListController {
    @Get()
    showLists(): string {
      return "Here list the list of to-dos";
    }

    @Post()
    createList(@Body() data): string {
        console.log(data)
        return "Here create a new to-do"
    }
}
