import { BaseEntity } from 'typeorm';
import { Article } from './article.entity';
import { Comment } from './comment.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    salt: string;
    profile_pic: string;
    reading_list: Article[];
    articles: Article[];
    comments: Comment[];
}
