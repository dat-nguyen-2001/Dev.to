import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/typeorm/user.entity';
import { JwtStrategy } from './jwt.strategy';
import {PassportModule} from '@nestjs/passport'

@Module({
  imports: [TypeOrmModule.forFeature([User]),],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class UsersModule {}
