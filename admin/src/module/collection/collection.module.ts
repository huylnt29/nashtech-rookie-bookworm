import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { BatchService } from '../batch/batch.service';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  imports: [PrismaModule],
  controllers: [CollectionController],
  providers: [CollectionService, BatchService],
  exports: [CollectionService],
})
export class CollectionModule {}
