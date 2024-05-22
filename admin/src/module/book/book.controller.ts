import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  FilesInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express/multer/interceptors';
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
    const books = await this.bookService.selectMany();
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
    return this.bookService.insert(images, createBookDto);
  }

  @Get(':id')
  async buildBookDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<any> {
    const book = await this.bookService.selectOne(id);
    const otherAuthors =
      await this.authorService.selectManyNotAssociateBook(id);
    const otherCategories =
      await this.categoryService.selectManyNotAssociateBook(id);
    const otherPublishers =
      await this.publisherService.selectManyNotAssociateBook(id);
    res.render('./view_book_detail/view_book_detail_page', {
      book,
      otherAuthors,
      otherCategories,
      otherPublishers,
    });
  }

  @Patch(':id')
  async patchBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<any> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.bookService.deactivate(id);
      return res.status(HttpStatus.OK).json({
        message: 'The book has been deleted successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'There is no book contains the provided id',
      });
    }
  }

  @Delete(':id/author/:authorId')
  async removeAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Param('authorId', ParseIntPipe) authorId: number,
    @Res() res: Response,
  ) {
    try {
      await this.bookService.disassociateAuthor(id, authorId);
      return res.status(HttpStatus.OK).json({
        message: 'The author has been removed successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'It fails to remove the author',
      });
    }
  }

  @Patch(':id/author/:authorId')
  async addAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Param('authorId', ParseIntPipe) authorId: number,
  ) {
    return this.bookService.associateAuthor(id, authorId);
  }

  @Patch(':id/image')
  @Header('Content-Type', 'multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async addImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.bookService.addImage(id, image);
  }
}
