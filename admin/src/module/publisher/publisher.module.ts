import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/service/prisma/prisma.module';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PublisherController],
  providers: [PublisherService],
  exports: [PublisherService],
})
export class PublisherModule {}
