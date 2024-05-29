import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiTags } from '@nestjs/swagger';
import { ReadPublicBookDto } from './dto/book.public.read.dto';

@Controller('public/book')
@ApiTags('PUBLIC - BOOK')
export class BookPublicController {
  constructor(private bookService: BookService) {}

  @Get(':id')
  async getBook(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ReadPublicBookDto> {
    const book = await this.bookService.selectOne(id);
    const batch = book.batches.at(0);
    const res: ReadPublicBookDto = {
      id: book.id,
      name: book.name,
      imageUrls: book.imageUrls,
      description: book.description,
      publishedYear: book.publishedYear,
      totalSoldQuantity: book.totalSoldQuantity,
      averageRating: book.averageRating,
      publisher: book.publisher,
      category: book.category,
      authors: book.authors,
      remainingQuantity: batch.initialQuantity - batch.soldQuantity,
      price: batch.price,
      discount: batch.discount,
      reviews: book.reviews,
    };
    return res;
  }
}
