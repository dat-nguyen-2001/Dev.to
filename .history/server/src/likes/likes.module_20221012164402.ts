import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/users/jwt.strategy';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class LikesModule {}
