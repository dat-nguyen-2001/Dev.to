import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm';

@Injectable()
export class LikesService {
    async createLike(userId: number, articleId: number) {
        const user = await User.findOne({where: {id: userId}})
    }
}
