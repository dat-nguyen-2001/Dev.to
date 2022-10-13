import { Injectable } from '@nestjs/common';
import { Like } from 'src/typeorm';

@Injectable()
export class LikesService {
    async createLike(userId: number, articleId: number) {
        const newLike = new Like();
        newLike.userId = userId;
        newLike.articleId = ar

    }
}
