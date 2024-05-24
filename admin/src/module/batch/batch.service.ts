import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { State } from '@prisma/client';
import { CreateBatchDto } from './dto/create_batch.dto';
import { UpdateBatchDto } from './dto/update_batch.dto';

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
        discount: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async insert(createBatchDto: CreateBatchDto) {
    return this.prisma.batch.create({
      data: createBatchDto,
      select: {
        id: true,
      },
    });
  }

  async deactivate(id: number) {
    return this.prisma.batch.update({
      where: {
        id: id,
      },
      data: {
        state: State.INACTIVE,
      },
    });
  }

  async selectOne(id: number) {
    return this.prisma.batch.findFirst({
      where: {
        id: id,
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            imageUrls: true,
          },
        },
        discount: {
          select: {
            id: true,
            minQuantity: true,
            maxQuantity: true,
            percentage: true,
            isRecurring: true,
          },
        },
      },
    });
  }

  async update(id: number, updateDto: UpdateBatchDto) {
    return this.prisma.batch.update({
      where: {
        id: id,
      },
      data: {
        ...updateDto,
        id: undefined,
      },
    });
  }

  async associateDiscount(id: number, discountId: number) {
    return this.prisma.batch.update({
      where: {
        id: id,
      },
      data: {
        discountId: discountId,
      },
    });
  }

  async selectManySimple(): Promise<any> {
    return this.prisma.batch.findMany({
      select: {
        id: true,
        book: {
          select: {
            id: true,
            name: true,
            imageUrls: true,
          },
        },
      },
      orderBy: {
        bookId: 'asc',
      },
    });
  }
}
