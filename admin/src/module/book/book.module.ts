import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaModule } from 'src/core/service/prisma/prisma.module';
import { S3Module } from 'src/core/service/s3/s3.module';
import { CategoryModule } from '../category/category.module';
import { AuthorModule } from '../author/author.module';
import { PublisherModule } from '../publisher/publisher.module';
import { BookPublicController } from './book.public.controller';
@Module({
  imports: [
    PrismaModule,
    S3Module,
    CategoryModule,
    AuthorModule,
    PublisherModule,
  ],
  controllers: [BookController, BookPublicController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
