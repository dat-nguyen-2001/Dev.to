import { Request } from 'express';
import { CreateCommentDto } from 'src/dtos/create-comment.dto';
import { Comment } from 'src/typeorm';
import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(req: Request, createCommentDto: CreateCommentDto): Promise<void>;
    getComments(articleId: number): Promise<Comment[]>;
}
