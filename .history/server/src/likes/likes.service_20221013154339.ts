import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Like, User } from 'src/typeorm';

@Injectable()
export class LikesService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async extractIdFromReq(req: Request) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) { console.log('Cannot get token'); return }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const user = await User.findOne({where: {email}})
        const userId = user.id;
        return userId
    }

    //Allow user to like an article
    async likeArticle(req: Request, articleId: number) : Promise<void> {
        //Check if the 

        const userId = await this.extractIdFromReq(req)
        const newLike = new Like();
        newLike.articleId = Number(articleId);
        newLike.userId = userId;
        await newLike.save()
    }

    //Get all articles liked by an user
    async getLikedArticles(req: Request) : Promise<number[]> {
        const userId = await this.extractIdFromReq(req);
        const likes = await Like.find({where: {userId}});
        const likedArticleIds = likes.map(like => like.articleId);
        return likedArticleIds;
    }
}
