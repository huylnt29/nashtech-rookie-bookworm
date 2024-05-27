import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../book/book.service';

@Controller('review')
@ApiTags('REVIEW')
export class ReviewController {
  constructor(private readonly bookService: BookService) {}
}
