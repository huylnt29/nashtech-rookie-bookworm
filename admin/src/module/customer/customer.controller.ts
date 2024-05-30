import { Body, Controller, Get, Post } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';

@Controller('/customer')
@ApiTags('CUSTOMER')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('everything')
  async getEverything() {
    return this.customerService.selectEverything();
  }
}
