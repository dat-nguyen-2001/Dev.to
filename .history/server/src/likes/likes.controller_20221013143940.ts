import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) { }
    @Post()
    async createLike(@Req() req: Request,@Body() createLikeDto: CreateLikeDto) {
        const {articleId} = createLikeDto
        return await this.likesService.createLike(req, articleId)
    }

    @Get()
    async getLikedArticles(@Req() req: Request)
}
