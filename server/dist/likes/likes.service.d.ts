import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export declare class LikesService {
    private jwtService;
    constructor(jwtService: JwtService);
    createLike(req: Request, articleId: number): Promise<void>;
}
