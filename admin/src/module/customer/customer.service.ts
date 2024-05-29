import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCustomerDto } from './dto/customer.create.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async insert(createDto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: createDto,
      select: {
        id: true,
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
