import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Like, User } from 'src/typeorm';

@Injectable()
export class LikesService {
    constructor(
        private jwtService: JwtService,
    ) { }

    const extractIdFromReq

    //Allow user to like an article
    async createLike(req: Request, articleId: number) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) { console.log('Cannot get token'); return }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const user = await User.findOne({where: {email}})
        const userId = user.id;
        const newLike = new Like();
        newLike.articleId = Number(articleId);
        newLike.userId = userId;
        await newLike.save()
    }

    //Get all articles liked by an user
    async getLikedArticles(req: Request) {

    }
}
