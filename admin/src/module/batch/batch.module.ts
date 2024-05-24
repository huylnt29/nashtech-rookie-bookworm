import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { BookModule } from '../book/book.module';
import { DiscountService } from '../discount/discount.service';

@Module({
  imports: [PrismaModule, BookModule],
  controllers: [BatchController],
  providers: [BatchService, DiscountService],
  exports: [BatchService],
})
export class BatchModule {}
