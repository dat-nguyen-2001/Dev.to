import { Comment } from './comment.entity';
import { User } from './user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    tags: string;
    comments: Comment;
    reactions: number;
    user: User;
}
