import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/service/prisma/prisma.module';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { BookModule } from '../book/book.module';

@Module({
  imports: [PrismaModule, BookModule],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class BatchModule {}
