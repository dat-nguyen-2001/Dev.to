import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export declare class LikesService {
    private jwtService;
    constructor(jwtService: JwtService);
    extractIdFromReq(req: Request): Promise<number>;
    likeArticle(req: Request, articleId: number): Promise<void>;
    getLikedArticles(req: Request): Promise<number[]>;
}
