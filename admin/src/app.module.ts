import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './module/book/book.module';
import { CategoryModule } from './module/category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthMiddleware } from './core/auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './core/logger/logger.middleware';
import { AuthModule } from './core/auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    BookModule,
    CategoryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).exclude('/auth/(.*)').forRoutes('*');
  }
}
