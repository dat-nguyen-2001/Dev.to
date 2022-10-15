import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { CreateCommentDto } from 'src/dtos/create-comment.dto';
import { Comment } from 'src/typeorm';
export declare class CommentsService {
    private jwtService;
    constructor(jwtService: JwtService);
    extractIdFromReq(req: Request): Promise<number>;
    createComment(req: Request, createCommentDto: CreateCommentDto): Promise<void>;
    getComments(articleId: number): Promise<Comment[]>;
}
