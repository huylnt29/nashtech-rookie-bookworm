import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { CreateDiscountDto } from './dto/create_discount.dto';
import { UpdateDiscountDto } from './dto/update_discount.dto';
import { BatchService } from '../batch/batch.service';
import { UpdateBatchDto } from '../batch/dto/update_batch.dto';

@Controller('discount')
@ApiTags('DISCOUNT')
export class DiscountController {
  constructor(
    private readonly discountService: DiscountService,
    private readonly batchService: BatchService,
  ) {}

  @Get()
  async buildDiscountListPage(@Res() res: Response) {
    const discounts = await this.discountService.selectMany();
    res.render('./view_discount_list/view_discount_list_page', {
      discounts,
    });
  }

  @Get('/everything')
  async getDiscounts() {
    return this.discountService.selectEverything();
  }

  @Get('/new')
  async buildCreateDiscountPage(
    @Res() res: Response,
    @Query('batch-id') batchId?: string,
  ) {
    if (batchId) {
      const batch = await this.batchService.selectOne(parseInt(batchId));
      res.render('./create_discount/create_discount_page', {
        batch,
      });
    } else {
      const batches = await this.batchService.selectManySimple();
      res.render('./create_discount/create_discount_page', {
        batches,
      });
    }
  }

  @Post()
  async postDiscount(
    @Body() createDto: CreateDiscountDto,
    @Query('batch-id') batchId?: string,
  ) {
    const newDiscount = await this.discountService.insert(createDto);
    if (batchId) {
      await this.batchService.associateDiscount(
        parseInt(batchId),
        newDiscount.id,
      );
    }
    return newDiscount;
  }

  @Get(':id')
  async buildDiscountDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const discount = await this.discountService.selectOne(id);
    res.render('./view_discount_detail/view_discount_detail_page', {
      discount,
    });
  }

  @Patch(':id')
  async patchDiscount(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDiscountDto,
  ): Promise<any> {
    return this.discountService.update(id, updateDto);
  }
}
