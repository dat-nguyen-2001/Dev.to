import { Controller } from '@nestjs/common';

@Controller('likes')
export class LikesController {
    constructor(private readonly articlesService: ArticlesService) { }

}
