import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());

  app.setViewEngine('pug');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'view'));

  const config = new DocumentBuilder()
    .setTitle('BookWorm Admin APIs')
    .setDescription('The BookWorm Admin APIs description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);

  // app.enableCors({
  //   origin: '*',
  //   allowedHeaders: '*',
  //   methods: '*',
  // });

  await app.listen(3000);
})();
