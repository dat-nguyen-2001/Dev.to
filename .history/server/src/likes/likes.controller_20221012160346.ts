import { CreateLikeDto } from './../../../.history/server/src/likes/likes.dto_20221012160034';
import { Body, Controller, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) { }
    @Post()
    async createLike(@Body() createLikeDto: CreateLikeDto) {
        const {userId, articleId} = createLikeDto
        return await this.likesService.createLike
    }
}
