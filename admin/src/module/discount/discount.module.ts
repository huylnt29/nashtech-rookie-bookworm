import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { BatchModule } from '../batch/batch.module';
import { BatchService } from '../batch/batch.service';

@Module({
  imports: [PrismaModule],
  controllers: [DiscountController],
  providers: [DiscountService, BatchService],
  exports: [DiscountService],
})
export class DiscountModule {}
