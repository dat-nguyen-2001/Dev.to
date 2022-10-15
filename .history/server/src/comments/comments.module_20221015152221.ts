import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PassportModule.register({ defaultStrategy: 'jwt' }),
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
