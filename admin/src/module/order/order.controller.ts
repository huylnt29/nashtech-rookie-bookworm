import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.create.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';

@Controller('/order')
@ApiTags('ORDER')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('everything')
  async getEverything() {
    return this.orderService.selectEverything();
  }
}
