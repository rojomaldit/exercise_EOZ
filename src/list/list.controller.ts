import { 
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';

import { CreateListDto } from './dto/create-list.controller'
import { ListService } from './list.service'
import { List } from './interfaces/list'


@Controller('list')
export class ListController {
  constructor(private listService : ListService) {}
  @Get()
  showLists(): List[] {
    return this.listService.showLists();
  }

  @Post()
  createList(@Body() data : CreateListDto): string {
    console.log(data)
    return "Here create a new to-do"
  }
}
