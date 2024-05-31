import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { CreateOrderDto, CreateOrderLineDto } from './dto/order.create.dto';
import { Order, OrderStatus, State } from '@prisma/client';
import { OrderStatusDto } from './dto/order.status.dto';

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

  async selectMany(): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: {
        state: State.ACTIVE,
      },
      include: {
        _count: {
          select: {
            orderLines: true,
          },
        },
        customer: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async selectOne(id: number): Promise<Order> {
    return this.prisma.order.findFirst({
      where: {
        id: id,
      },
      include: {
        customer: true,
        orderLines: {
          include: {
            batch: {
              include: {
                book: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  generateStatuses(currentStatus: OrderStatus): OrderStatusDto[] {
    const result: OrderStatusDto[] = [];
    for (const key in OrderStatus) {
      let isSelectable = true;
      switch (OrderStatus[key]) {
        case 'PLACED':
          isSelectable = false;
          break;
        default:
          if (
            currentStatus == OrderStatus.COMPLETED ||
            currentStatus == OrderStatus.CANCELLED
          )
            isSelectable = false;
      }
      result.push({
        value: OrderStatus[key],
        isSelected: OrderStatus[key] == currentStatus,
        isSelectable: isSelectable,
      });
    }
    return result;
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
