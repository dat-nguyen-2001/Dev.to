import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne, ManyToOne, BaseEntity } from 'typeorm';
import { Article } from './article.entity';
import { User } from './user.entity';

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'comment_id'
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    content: string;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    @ManyToOne(() => Article, article => article.comments)
    article: Article

    @ManyToOne(() => User, user => user.comments)
    user: User
}