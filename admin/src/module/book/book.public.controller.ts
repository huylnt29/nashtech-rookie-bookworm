import {
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ReadPublicBookDto } from './dto/book.public.read.dto';
import { PaginationService } from 'src/core/service/pagination/pagination.service';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { ReadPublicFilteredBookDto } from './dto/book.public.filtered.dto';
import { BookOrderByDto } from './dto/book.order_by.dto';
import { Prisma } from '@prisma/client';
import { PaginationOptions } from 'src/core/service/pagination/pagination_options.type';

@Controller('public/book')
@ApiTags('PUBLIC - BOOK')
export class BookPublicController {
  constructor(
    private bookService: BookService,
    private paginationService: PaginationService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Để trống thì page = 1',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Để trống thì limit = 5',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Tìm kiếm theo tên...',
  })
  @ApiQuery({
    name: 'categories',
    required: false,
  })
  @ApiQuery({
    name: 'authors',
    required: false,
  })
  @ApiQuery({
    name: 'sale',
    required: false,
  })
  @ApiQuery({
    name: 'popular',
    required: false,
  })
  @ApiQuery({
    name: 'price',
    required: false,
  })
  async getSorted(
    @Query('search') search: string | undefined,
    @Query(
      'categories',
      new ParseArrayPipe({ items: Number, separator: ',', optional: true }),
    )
    categories: number[],
    @Query(
      'authors',
      new ParseArrayPipe({ items: Number, separator: ',', optional: true }),
    )
    authors: number[],
    @Query('sale')
    sale: Prisma.SortOrder | undefined,
    @Query('popular')
    popular: Prisma.SortOrder | undefined,
    @Query('price')
    price: Prisma.SortOrder | undefined,
    @Query() paginationOptions: PaginationOptions,
  ) {}

  @Get(':id')
  async getBook(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ReadPublicBookDto> {
    const book = await this.bookService.selectOne(id);
    const batch = book.batches.at(0);
    const res: ReadPublicBookDto = {
      id: book.id,
      batchId: batch.id,
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
