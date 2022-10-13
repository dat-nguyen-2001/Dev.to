import { Body, Controller, Post } from '@nestjs/common';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) { }
    @Post()
    async createLike(@Body() createLikeDto: CreateLikeDto) {
        const {userId, articleId} = createLikeDto
        return await this.likesService.createLike(userId, articleId)
    }
}
