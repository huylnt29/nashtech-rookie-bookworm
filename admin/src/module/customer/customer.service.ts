import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { CreateCustomerDto } from './dto/customer.create.dto';
import { Customer, State } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async insertOrUpdate(createDto: CreateCustomerDto) {
    return this.prisma.customer.upsert({
      where: {
        phone: createDto.phone,
      },
      create: createDto,
      update: {
        ...createDto,
        phone: undefined,
        email: undefined,
      },
      select: {
        id: true,
        phone: true,
      },
    });
  }

  async selectMany(): Promise<Customer[]> {
    return this.prisma.customer.findMany({
      where: {
        state: State.ACTIVE,
      },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
      },
    });
  }

  async selectOne(id: number): Promise<Customer> {
    return this.prisma.customer.findFirst({
      where: {
        state: State.ACTIVE,
      },
      include: {
        orders: {
          select: {
            id: true,
            totalPrice: true,
            totalQuantity: true,
            status: true,
            paymentMethod: true,
          },
        },
      },
    });
  }

  async selectEverything(): Promise<any[]> {
    return this.prisma.customer.findMany({
      include: {
        orders: true,
      },
    });
  }
}
