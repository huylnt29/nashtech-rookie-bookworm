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
  Res,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { CreateDiscountDto } from './dto/create_discount.dto';
import { UpdateDiscountDto } from './dto/update_discount.dto';

@Controller('discount')
@ApiTags('DISCOUNT')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  async postAuthor(@Body() createDto: CreateDiscountDto) {
    const result = this.discountService.insert(createDto);
    return result;
  }

  @Patch(':id')
  async patchAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDiscountDto,
  ): Promise<any> {
    return this.discountService.update(id, updateDto);
  }
}
