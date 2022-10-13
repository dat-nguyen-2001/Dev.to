import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Article } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';
export declare class ArticlesService {
    private jwtService;
    constructor(jwtService: JwtService);
    getArticles(req: Request): Promise<Article[]>;
    getArticlesByUser(username: string): Promise<Article[]>;
    createArticle(req: Request, createArticleDto: CreateArticleDto): Promise<Article>;
    likeArticle(title: string): Promise<void>;
    saveArticle(req: Request, id: number): Promise<void>;
}
