import { IsNotEmpty } from "class-validator";

export class CreateLikeDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  articleId: string;

  @IsNotEmpty()
  tags: string;

  coverImage: string;
}