import { Request } from 'express';
import { Article } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';
import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticles(req: Request): Promise<Article[]>;
    getArticlesByUser(username: string): Promise<Article[]>;
    createArticle(req: Request, createArticleDto: CreateArticleDto): Promise<Article>;
    likeArticle(title: string): Promise<void>;
    saveArticle(req: Request, id: number): Promise<void>;
}
