import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    MulterModule.register({
      dest: './upload/post',
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
