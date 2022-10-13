import { IsNotEmpty } from "class-validator";

export class CreateLikeDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  articleId: number;

  @IsNotEmpty()
  tags: string;

  coverImage: string;
}