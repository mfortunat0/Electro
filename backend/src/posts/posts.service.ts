import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from './post.dto';
import { Post } from './post.entity';
import * as sharp from 'sharp';
import { unlinkSync } from 'fs';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(postDto: PostDto, file: Express.Multer.File) {
    postDto.isAproved = false;
    const post = this.postRepository.create(postDto);
    const result = await this.postRepository.save(post);
    if (result) {
      await sharp(file.path)
        .resize(312, 262)
        .toFile(`${file.path.replace(file.filename, '')}${result.id}.jpg`);
      unlinkSync(file.path);
      return result;
    }
  }

  async findAll() {
    return await this.postRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async update(id: number, postDto: PostDto) {
    const post = this.postRepository.create(postDto);
    return await this.postRepository.update({ id }, post);
  }

  async remove(id: number) {
    return await this.postRepository.delete(id);
  }
}
