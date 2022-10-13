import { Injectable } from '@nestjs/common';
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
        const allArticles = await Article.find<Article>({
            relations: {
                listed_users: true,
                user: true
            }
        });
        return allArticles
    }

    async get

    async createArticle(req: Request, createArticleDto: CreateArticleDto) {
        const {title, content, tags, coverImage} = createArticleDto;

        //Extract email from the access token
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if(!token) {console.log('Cannot get token'); return}
        const data = await this.jwtService.verify(token, {secret: process.env.ACCESS_TOKEN_SECRET});
        const email = data.email;
        //Create new article
        const newArticle = new Article();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        const user = await User.findOne({where: {email}});
        newArticle.user = user
        newArticle.userId = user.id
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_users = [];
        newArticle.coverImage = coverImage;
        return await newArticle.save();
    }
}