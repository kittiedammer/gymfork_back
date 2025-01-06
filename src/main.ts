import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log('AAAAAAAAUUUUU', process.env)
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Magic Battles')
    .setDescription('Swagger for Magic Battles API')
    .setVersion('1.0')
    .addTag('methods')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.enableCors(); // Включите CORS
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
