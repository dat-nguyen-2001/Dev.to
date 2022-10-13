import { Body, Controller, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) { }
    @Post()
    async createLike(@Body() createLikeDto: Createlike) {
        const {userId, articleId} = createLikeDto
        return await this.likesService.createLike(userId, articleId)
    }
}
