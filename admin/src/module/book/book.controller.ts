import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<BookModel[]> {
    return this.bookService.selectBooks();
  }

  @Post()
  async postBook(@Body() createBookDto: CreateBookDto) {
    const result = this.bookService.insertBook(createBookDto);
    return result;
  }
}
