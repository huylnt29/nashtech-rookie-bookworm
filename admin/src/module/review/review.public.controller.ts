import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/review.create.dto';

@Controller('public/review')
@ApiTags('PUBLIC - REVIEW')
export class ReviewPublicController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post()
  async postReview(@Body() createDto: CreateReviewDto) {
    const result = this.reviewService.insert(createDto);
    return result;
  }
}
