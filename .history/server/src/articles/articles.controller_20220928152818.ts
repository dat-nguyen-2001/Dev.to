import { Body, Controller, Get, Param, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { CreateArticleDto } from './articles.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    getArticles() {
        return this.articlesService.getArticles();
    }

    @Get('/:username')
    getArticlesByUser(@Param() username: string) : Promise<Articles[] {
        return this.articlesService.getArticlesByUser()
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createArticle(@Req() req: Request,@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.createArticle(req, createArticleDto);
    }
}
