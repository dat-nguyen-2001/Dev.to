import { Body, Controller, Get, Param, Post, Put, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { Article } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    async getArticles(@Req() req: Request) {
        return await this.articlesService.getArticles(req);
    }

    @Get('/:username')
    async getArticlesByUser(@Param('username') username: string) : Promise<Article[]> {
        return await this.articlesService.getArticlesByUser(username)
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createArticle(@Req() req: Request,@Body() createArticleDto: CreateArticleDto) {
        return await this.articlesService.createArticle(req, createArticleDto);
    }

    @Put('/like/:title')
    async likeArticle(@Param('title') title: string) : Promise<void> {
        return await this.articlesService.likeArticle(title)
    }

    @Put('/save/')

}
