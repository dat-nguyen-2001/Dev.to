import { Injectable } from '@nestjs/common';
import { Like } from 'src/typeorm';

@Injectable()
export class LikesService {
    async createLike(req: number, articleId: number) {
        const newLike = new Like();
        newLike.userId = userId;
        newLike.articleId = articleId;

    }
}
