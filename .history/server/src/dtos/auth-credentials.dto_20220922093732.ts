import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
// import { Comment } from "src/typeorm/comment.entity";
// import { Post } from "src/typeorm/post.entity";

export class AuthCredentialDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}