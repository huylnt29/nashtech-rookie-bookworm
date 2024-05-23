import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { BookModule } from '../book/book.module';

@Module({
  imports: [PrismaModule, BookModule],
  controllers: [BatchController],
  providers: [BatchService],
  exports: [BatchService],
})
export class BatchModule {}
