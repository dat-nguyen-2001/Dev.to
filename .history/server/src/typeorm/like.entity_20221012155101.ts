import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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

}