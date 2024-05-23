import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../book/book.service';
import { CreateBatchDto } from './dto/create_batch.dto';

@Controller('batch')
@ApiTags('BATCH')
export class BatchController {
  constructor(
    private readonly batchService: BatchService,
    private readonly bookService: BookService,
  ) {}

  @Get()
  async buildBatchListPage(@Res() res: Response): Promise<void> {
    const batches = await this.batchService.selectMany();
    res.render('./view_batch_list/view_batch_list_page', {
      batches,
    });
  }

  @Get('new')
  async buildCreateBatchPage(@Res() res: Response): Promise<void> {
    const books = await this.bookService.selectManySimple();
    return res.render('./create_batch/create_batch_page', {
      books,
    });
  }

  @Post()
  async postBatch(@Body() createBatchDto: CreateBatchDto): Promise<any> {
    return this.batchService.insert(createBatchDto);
  }
}
