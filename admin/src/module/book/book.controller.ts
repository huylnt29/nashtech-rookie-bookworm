import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('book')
@ApiTags('BOOK')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async buildBookListPage(@Res() res: Response): Promise<void> {
    const books = await this.bookService.selectBooks();
    res.render('./view_book_list/view_book_list_page', {
      books,
    });
  }

  @Get('new')
  async buildCreateBookPage(@Res() res: Response): Promise<void> {
    const categories = await this.bookService.selectCategories();
    const authors = await this.bookService.selectAuthors();
    const publishers = await this.bookService.selectPublishers();
    res.render('./create_book/create_book_page', {
      categories,
      authors,
      publishers,
    });
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
    return this.bookService.updateBook(id, updateBookDto);
  }
}
