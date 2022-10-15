import { BaseEntity } from 'typeorm';
import { Article } from './article.entity';
import { User } from './user.entity';
export declare class Comment extends BaseEntity {
    id: number;
    content: string;
    article: Article;
    user: User;
}
