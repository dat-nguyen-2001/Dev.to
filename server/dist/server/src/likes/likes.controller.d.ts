import { CreateLikeDto } from './../../../.history/server/src/likes/likes.dto_20221012160034';
import { LikesService } from './likes.service';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    createLike(createLikeDto: CreateLikeDto): Promise<any>;
}
