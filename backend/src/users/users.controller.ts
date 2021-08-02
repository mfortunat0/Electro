import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

interface QueryProps {
  email: string;
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findOne(@Query() query: QueryProps) {
    if (query.email && query.password) {
      return this.usersService.findOne(query.email, query.password);
    } else {
      return this.usersService.findAll();
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('profilePhoto'))
  create(@Body() body: UserDto, @UploadedFile() file: Express.Multer.File) {
    return this.usersService.create(body, file);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: UserDto) {
    return this.usersService.update(id, body);
  }
}
