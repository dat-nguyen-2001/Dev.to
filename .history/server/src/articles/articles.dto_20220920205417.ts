import { IsNotEmpty } from "class-validator";
// import { Comment } from "src/typeorm/comment.entity";
// import { Post } from "src/typeorm/post.entity";

export class CreateArticleDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  tags: string;

  @IsNotEmpty()
  user_id: number
}