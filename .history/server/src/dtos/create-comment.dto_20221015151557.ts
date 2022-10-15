import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  tags: string;

  coverImage: string;
}