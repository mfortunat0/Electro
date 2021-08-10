import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('NadaService', () => {
  let service: UsersService;
  let module: TestingModule;
  const file: Express.Multer.File = null;

  const userDto = {
    email: 'test@gmail.com',
    isModerator: false,
    name: 'test',
    password: 'test',
  };

  let newUser;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          // @ts-ignore
          type: process.env.TYPEORM_CONNECTION,
          host: process.env.TYPEORM_HOST,
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          port: Number(process.env.TYPEORM_PORT),
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create new user', async () => {
    newUser = await service.create(userDto, file);
    expect(newUser).toEqual({
      email: expect.any(String),
      isModerator: expect.any(Boolean),
      name: expect.any(String),
      password: expect.any(String),
      id: expect.any(String),
    });
  });

  it('should be find user', async () => {
    expect(await service.findAll()).toEqual([newUser]);
  });

  it('should be conflict error', async () => {
    try {
      await service.create(userDto, file);
    } catch (error) {
      expect(error).toEqual(
        new HttpException('Email already exists', HttpStatus.CONFLICT),
      );
    }
  });
});
