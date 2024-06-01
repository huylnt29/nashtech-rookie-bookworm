import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ReviewService } from './review.service';

@Controller('review')
@ApiTags('REVIEW')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Get()
  async buildReviewListPage(@Res() res: Response): Promise<void> {
    const reviews = await this.reviewService.selectMany();
    res.render('./view_review_list/view_review_list_page', {
      reviews,
    });
  }
}
