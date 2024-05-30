import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.create.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';
import { Response } from 'express';

@Controller('/order')
@ApiTags('ORDER')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('everything')
  async getEverything() {
    return this.orderService.selectEverything();
  }

  @Get()
  async buildOrderListPage(@Res() res: Response): Promise<void> {
    const orders = await this.orderService.selectMany();
    res.render('./view_order_list/view_order_list_page', {
      orders,
    });
  }

  // @Get(':id')
  // async buildOrderDetailPage(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Res() res: Response,
  // ): Promise<void> {
  //   const order = await this.orderService.selectOne(id);
  //   res.render('./view_order_detail/view_order_detail_page', {
  //     order,
  //   });
  // }
}
