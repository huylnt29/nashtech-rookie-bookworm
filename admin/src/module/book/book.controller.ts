import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { AuthorService } from '../author/author.service';
import { PublisherService } from '../publisher/publisher.service';
import { CategoryService } from '../category/category.service';

@Controller('book')
@ApiTags('BOOK')
export class BookController {
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private publisherService: PublisherService,
    private authorService: AuthorService,
  ) {}

  @Get()
  async buildBookListPage(@Res() res: Response): Promise<void> {
    const books = await this.bookService.selectBooks();
    res.render('./view_book_list/view_book_list_page', {
      books,
    });
  }

  @Get('new')
  async buildCreateBookPage(@Res() res: Response): Promise<void> {
    const categories = await this.categoryService.selectManySimple();
    const authors = await this.authorService.selectManySimple();
    const publishers = await this.publisherService.selectManySimple();
    return res.render('./create_book/create_book_page', {
      categories,
      authors,
      publishers,
    });
  }

  @Post()
  @Header('Content-Type', 'multipart/form-data')
  @UseInterceptors(FilesInterceptor('images', 5))
  async postBook(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() createBookDto: CreateBookDto,
  ): Promise<any> {
    return this.bookService.insertBook(images, createBookDto);
  }

  @Patch(':id')
  async patchBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<any> {
    return this.bookService.updateBook(id, updateBookDto);
  }
}
