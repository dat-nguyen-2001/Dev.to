import { BaseEntity } from 'typeorm';
export declare class Like extends BaseEntity {
    id: number;
    userId: number;
    articleId: number;
}
