import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany ,BaseEntity } from 'typeorm';
import { Article } from './article.entity';
import { Comment } from './comment.entity';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,
    })
    email: string;

    @Column({
        nullable: false,
    })
    password: string;

    @ManyToMany(() => Article, article => article.listed_user)
    reading_list: Article[];

    @OneToMany(() => Article, article => article.user, {eager: true})
    articles: Article[];

    @OneToMany(() => Comment, comment => comment.user, {eager: true})
    comments: Comment[];
}