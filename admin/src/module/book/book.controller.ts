import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<BookModel[]> {
    return this.bookService.books();
  }
}
