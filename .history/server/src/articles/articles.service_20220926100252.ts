import { Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Article, User } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
    constructor(
        private jwtService: JwtService,
      ) { }
   
    async getArticles() {
        const allArticles = await Article.find();
        return allArticles
    }

    async createArticle(req: Request, createArticleDto: CreateArticleDto) {
        const {title, content, tags, email} = createArticleDto;
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split('')[1];
        const data = await this.jwtService.verify(token, {secret: process.env.ACCESS_TOKEN_SECRET});
        console.log('DATA ')
        const newArticle = new Article();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        newArticle.user = await User.findOne({where: {email}});
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_user = [];
        newArticle.coverImage = '';
        return await newArticle.save();
    }
}