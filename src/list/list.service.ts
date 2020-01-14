import { Injectable } from '@nestjs/common';
import { List } from './interfaces/list'

@Injectable()
export class ListService {
    lists: List[] = [
        {
            id: 1,
            description: "ToDo1",
            deleted: 0
        },
        {
            id: 2,
            description: "ToDo2",
            deleted: 0
        },
        {
            id: 3,
            description: "ToDo3",
            deleted: 0
        }
    ]
}
