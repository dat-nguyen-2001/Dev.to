import { Post, User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './posts.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Post>);
    getPosts(): Promise<Post[]>;
    createPost(createPostDto: CreatePostDto, user: User): Promise<Post>;
}
