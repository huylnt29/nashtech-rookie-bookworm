import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.create.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';

@Controller('/public/order')
@ApiTags('PUBLIC - ORDER')
export class OrderPublicController {
  constructor(
    private readonly orderService: OrderService,
    private readonly customerService: CustomerService,
  ) {}

  @Post()
  async postOrder(@Body() createDto: CreateOrderDto) {
    const { id } = await this.customerService.insert(createDto.customer);
    const result = this.orderService.insert(createDto, id);
    return result;
  }
}
