import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('book')
@ApiTags('BOOK')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<BookModel[]> {
    return this.bookService.selectBooks();
  }

  @Post()
  async postBook(@Body() createBookDto: CreateBookDto): Promise<any> {
    const result = this.bookService.insertBook(createBookDto);
    return result;
  }

  @Patch(':id')
  async patchBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<any> {
    console.log(updateBookDto);
    return this.bookService.updateBook(id, updateBookDto);
  }
}
