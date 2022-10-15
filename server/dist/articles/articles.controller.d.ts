import { Request } from 'express';
import { Article } from 'src/typeorm';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from 'src/dtos/create-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticles(req: Request): Promise<Article[]>;
    getArticlesByUser(username: string): Promise<Article[]>;
    createArticle(req: Request, createArticleDto: CreateArticleDto): Promise<Article>;
    likeArticle(title: string): Promise<void>;
    saveArticle(req: Request, id: number): Promise<void>;
}
