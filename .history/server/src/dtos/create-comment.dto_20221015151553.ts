import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  tags: string;

  coverImage: string;
}