import { Controller } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
    constructor(private readonly likesService: LikesService) { }

}
