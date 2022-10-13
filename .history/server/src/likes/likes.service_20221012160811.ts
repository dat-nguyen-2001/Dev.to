import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';

@Injectable()
export class LikesService {
    async createLike(userId: number, articleId: number) {
        const newLike = new Like()
    }
}
