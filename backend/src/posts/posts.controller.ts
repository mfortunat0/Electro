import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostDto } from './post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('postPhoto'))
  create(@Body() body: PostDto, @UploadedFile() file: Express.Multer.File) {
    return this.postService.create(body, file);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: PostDto) {
    return this.postService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postService.remove(id);
  }
}
