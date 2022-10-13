import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesService {
    async createLike(userId: number, articleId: number) {
        const user = await User
    }
}
