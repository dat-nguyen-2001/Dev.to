import { BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from './user.entity';
export declare class Article extends BaseEntity {
    id: number;
    created_at: Date;
    title: string;
    content: string;
    tags: string;
    coverImage: string | null;
    comments: Comment[];
    reactions: number;
    user: User;
    userId: number;
    listed_users: User[];
}
