import { HttpException, HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: (origin, callback) => {
        if (origin !== 'http://localhost') {
          throw new HttpException(
            'Not allowed by CORS',
            HttpStatus.METHOD_NOT_ALLOWED,
          );
        } else {
          callback(null, true);
        }
      },
    },
  });
  await app.listen(3001);
}
bootstrap();
