import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
//const cors = require('cors');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//  const corsConfig = {
//    credentials: true,
//    origin: "http://localhost:3000",
//};
//app.use(cors(corsConfig));
  const config = new DocumentBuilder()
  .setTitle('swagger')
  .setDescription('The  API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({}
  ));
  //app.enableCors();
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(8000);
}
bootstrap();
