import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { BatchService } from './batch.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../book/book.service';
import { CreateBatchDto } from './dto/create_batch.dto';
import { DiscountService } from '../discount/discount.service';

@Controller('batch')
@ApiTags('BATCH')
export class BatchController {
  constructor(
    private readonly batchService: BatchService,
    private readonly bookService: BookService,
    private readonly discountService: DiscountService,
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

  @Delete(':id')
  async deleteBook(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.batchService.deactivate(id);
      return res.status(HttpStatus.OK).json({
        message: 'The batch has been deactivated successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'There is no batch contains the provided id',
      });
    }
  }

  @Get(':id')
  async buildBatchDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const batch = await this.batchService.selectOne(id);
    const otherDiscounts =
      await this.discountService.selectManyNotAssociateBatch(id);

    res.render('./view_batch_detail/view_batch_detail_page', {
      batch,
      otherDiscounts,
    });
  }
}
