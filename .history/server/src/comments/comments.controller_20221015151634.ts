import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }
    @Post() 
    async comment(@Req() req: Request) : Promise<void> {

    }
}
