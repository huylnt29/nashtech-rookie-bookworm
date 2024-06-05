import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Res,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrderStatus } from '@prisma/client';
import { OrderStatusDto } from './dto/order.status.dto';

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

  @Get(':id')
  async buildOrderDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const order = await this.orderService.selectOne(id);
    const statuses = this.orderService.generateStatuses(order.status);
    res.render('./view_order_detail/view_order_detail_page', {
      order,
      statuses,
    });
  }

  @Patch(':id/status/:value')
  async patchOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Param('value') status: OrderStatus,
  ) {
    return this.orderService.updateStatus(id, status);
  }
}
