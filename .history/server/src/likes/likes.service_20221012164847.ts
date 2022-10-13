import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Like } from 'src/typeorm';

@Injectable()
export class LikesService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async createLike(req: Request, articleId: number) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) { console.log('Cannot get token'); return }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const user = User
        const userId = data.id;
        console.log(data)
        const newLike = new Like();
        newLike.articleId = Number(articleId);
        newLike.userId = 1;
        await newLike.save()
    }
}
