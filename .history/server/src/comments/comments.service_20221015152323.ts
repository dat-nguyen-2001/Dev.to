import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateCommentDto } from 'src/dtos/create-comment.dto';

@Injectable()
export class CommentsService {
    constructor(
        private jwtService: JwtService,
    ) {
    }
    

    async createComment(req: Request, createCommentDto: CreateCommentDto) : Promise<void> {
        const {content, articleId} = createCommentDto;


    }
}
