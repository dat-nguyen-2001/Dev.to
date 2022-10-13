import { Request } from 'express';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    createLike(req: Request, createLikeDto: CreateLikeDto): Promise<void>;
}
