import { Controller, Post, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }
    @Post() 
    async comment(@Req()) : Promise<void> {

    }
}
