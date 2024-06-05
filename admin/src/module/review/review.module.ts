import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/service/prisma/prisma.module';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { ReviewPublicController } from './review.public.controller';
@Module({
  imports: [PrismaModule],
  controllers: [ReviewController, ReviewPublicController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
