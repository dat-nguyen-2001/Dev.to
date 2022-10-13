import { CreatePostDto } from './posts.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<import("../typeorm").Post[]>;
    createPost(createPostDto: CreatePostDto): Promise<import("../typeorm").Post>;
}
