import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import * as sharp from 'sharp';
import { unlinkSync, copyFileSync } from 'fs';
import { join } from 'path';
import { hashSync, compareSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(email: string, password: string) {
    const result = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (result) {
      if (!compareSync(password, result.password)) {
        throw new HttpException('User not exists', HttpStatus.CONFLICT);
      }
      return result;
    } else {
      throw new HttpException('User not exists', HttpStatus.CONFLICT);
    }
  }

  async create(userDto: UserDto, file: Express.Multer.File) {
    const userExists = await this.userRepository.findOne({
      where: {
        email: userDto.email,
      },
    });
    if (userExists) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }
    const user = this.userRepository.create(userDto);
    user.password = hashSync(user.password, 3);

    if (user.isModerator) user.isModerator = true;
    else user.isModerator = false;

    const result = await this.userRepository.save(user);
    if (result) {
      if (file) {
        // Foto passada no form
        await sharp(file.path)
          .resize(45, 45)
          .toFile(`${file.path.replace(file.filename, '')}${result.id}.jpg`);
        unlinkSync(file.path);
      } else {
        // Foto padrao
        copyFileSync(
          join(__dirname, '../../upload/user/default.jpg'),
          join(__dirname, `../../upload/user/${result.id}.jpg`),
        );
      }
      return result;
    }
  }

  async update(id: number, userDto: UserDto) {
    const user = this.userRepository.create(userDto);
    return await this.userRepository.update({ id }, user);
  }
}
