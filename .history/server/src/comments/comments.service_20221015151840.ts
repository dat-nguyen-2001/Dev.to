import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CommentsService {
    constructor() {}
    async createComment(req: Request, createCommentDto: Create)
}
