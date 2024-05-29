import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateOrderDto, CreateOrderLineDto } from './dto/order.create.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async insert(createDto: CreateOrderDto, customerId: number) {
    const order = await this.prisma.order.create({
      data: {
        customerId: customerId,
        totalQuantity: createDto.totalQuantity,
        totalPrice: createDto.totalPrice,
      },
      select: {
        id: true,
      },
    });
    for (let line of createDto.lines) {
      await this.insertOrderLine(line, order.id);
    }
    return order;
  }

  async insertOrderLine(createDto: CreateOrderLineDto, orderId: number) {
    return this.prisma.orderLine.create({
      data: {
        orderId: orderId,
        batchId: createDto.batchId,
        quantity: createDto.quantity,
        price: createDto.price,
      },
      select: {
        id: true,
      },
    });
  }

  async selectEverything(): Promise<any[]> {
    return this.prisma.order.findMany({
      include: {
        orderLines: true,
        customer: true,
      },
    });
  }
}
