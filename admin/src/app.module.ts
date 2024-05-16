import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './module/book/book.module';
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [BookModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
