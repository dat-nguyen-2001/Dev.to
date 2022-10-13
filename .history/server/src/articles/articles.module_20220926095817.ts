import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: "datlinh1",
    signOptions: {
      expiresIn: 3600
    }
  })],
  controllers: [ArticlesController, JwtStrategy],
  providers: [ArticlesService]
})
export class ArticlesModule {}
