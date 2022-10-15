import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCommentDto } from 'src/dtos/create-comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }
    @Post() 
    async comment(@Req() req: Request, @Body() createCommentDto: CreateCommentDto) : Promise<void> {
        return await 
    }
}
