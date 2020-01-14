import { 
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';

import { CreateListDto } from './dto/create-list.controller'

@Controller('list')
export class ListController {
    @Get()
    showLists(): string {
      return "Here list the list of to-dos";
    }

    @Post()
    createList(@Body() data : CreateListDto): string {
        console.log(data)
        return "Here create a new to-do"
    }
}
