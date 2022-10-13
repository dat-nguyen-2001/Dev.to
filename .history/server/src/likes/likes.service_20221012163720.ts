import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Like } from 'src/typeorm';

@Injectable()
export class LikesService {
    async createLike(req: Request, articleId: number) {
        const newLike = new Like();
        newLike.articleId = articleId;

    }
}
