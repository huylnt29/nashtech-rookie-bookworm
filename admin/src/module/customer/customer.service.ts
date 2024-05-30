import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { CreateCustomerDto } from './dto/customer.create.dto';

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

  async selectEverything(): Promise<any[]> {
    return this.prisma.customer.findMany({
      include: {
        orders: true,
      },
    });
  }
}
