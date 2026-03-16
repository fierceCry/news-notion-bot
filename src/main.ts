import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api/v1');

  const PORT = configService.get('PORT');

  try {
    await app.listen(PORT);
    console.log(`Server is running PORT on ${PORT}`);
  } catch (error) {
    console.log('Error starting server: 포트를 열 수 없습니다.', error);
  }
}
bootstrap();
