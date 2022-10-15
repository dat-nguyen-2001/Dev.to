import { Module } from '@nestjs/common';
import { Comment } from 'src/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), Pass.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: "datlinh1",
    signOptions: {
      expiresIn: 3600
    }
  })],
  controllers: [CommentsController],
  providers: [CommentsService JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class CommentsModule { }
