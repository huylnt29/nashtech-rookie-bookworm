import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Res,
} from '@nestjs/common';
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

  @Patch(':id')
  async patchReviewState(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.reviewService.updateState(id);
      return res.status(HttpStatus.OK).json({
        message: 'The review has been deactivated successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'There is no review contains the provided id',
      });
    }
  }
}
