import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/review.create.dto';
import { Response } from 'express';

@Controller('public/review')
@ApiTags('PUBLIC - REVIEW')
export class ReviewPublicController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post()
  async postReview(
    @Body() createDto: CreateReviewDto,
    @Res() response: Response,
  ) {
    const result = await this.reviewService.insert(createDto);
    if (result != null) return response.status(200).json(result);
    else {
      return response.status(403).json({
        message: 'The content or the rating must not be empty.',
      });
    }
  }
}
