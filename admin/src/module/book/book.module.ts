import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { S3Module } from 'src/core/s3/s3.module';
import { CategoryModule } from '../category/category.module';
import { AuthorModule } from '../author/author.module';
import { PublisherModule } from '../publisher/publisher.module';

@Module({
  imports: [
    PrismaModule,
    S3Module,
    CategoryModule,
    AuthorModule,
    PublisherModule,
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
