import { Injectable } from '@nestjs/common';
import { Article, User } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
   
    getArticles() {
        const allArticles = Article.find();
        return allArticles
    }

    async createArticle(createArticleDto: CreateArticleDto) {
        const {title, content, tags, user_id} = createArticleDto
        const newArticle = new Article();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        newArticle.user = await User.findOne({where: {id: user_id}});
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_user = [];
        return await newArticle.save();
    }
}