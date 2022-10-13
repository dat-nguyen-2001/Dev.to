import { Injectable, Req } from '@nestjs/common';
import { Article, User } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
   
    getArticles() {
        const allArticles = Article.find();
        return allArticles
    }

    async createArticle(@Req,createArticleDto: CreateArticleDto) {
        const {title, content, tags, email} = createArticleDto
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