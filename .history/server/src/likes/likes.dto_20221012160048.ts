import { IsNotEmpty } from "class-validator";

export class CreateLikeDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  tags: string;

  coverImage: string;
}