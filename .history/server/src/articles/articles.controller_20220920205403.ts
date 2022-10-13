import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateArticleDto } from './articles.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    getArticles() {
        return this.articlesService.getArticles();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createArticle(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.createArticle(createArticleDto);
    }
}
