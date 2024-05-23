import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { State } from '@prisma/client';

@Injectable()
export class BatchService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<any> {
    return this.prisma.batch.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        soldQuantity: true,
        price: true,
        updatedAt: true,
        book: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            discounts: true,
          },
        },
      },
    });
  }
}