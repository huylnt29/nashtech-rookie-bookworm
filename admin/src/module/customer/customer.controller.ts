import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { Response } from 'express';

@Controller('/customer')
@ApiTags('CUSTOMER')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('everything')
  async getEverything() {
    return this.customerService.selectEverything();
  }

  @Get()
  async buildCustomerListPage(@Res() res: Response): Promise<void> {
    const customers = await this.customerService.selectMany();
    res.render('./view_customer_list/view_customer_list_page', {
      customers,
    });
  }

  @Get(':id')
  async buildCustomerDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const customer = await this.customerService.selectOne(id);
    res.render('./view_customer_detail/view_customer_detail_page', {
      customer,
    });
  }
}
