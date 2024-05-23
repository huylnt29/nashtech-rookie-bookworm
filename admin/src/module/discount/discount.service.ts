import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateDiscountDto } from './dto/create_discount.dto';
import { UpdateDiscountDto } from './dto/update_discount.dto';
import { State } from '@prisma/client';

@Injectable()
export class DiscountService {
  constructor(private prisma: PrismaService) {}

  async insert(createDto: CreateDiscountDto) {
    return this.prisma.discount.create({
      data: createDto,
      select: {
        id: true,
      },
    });
  }

  async update(id: number, updateDto: UpdateDiscountDto) {
    return this.prisma.discount.update({
      where: {
        id: id,
      },
      data: {
        ...updateDto,
        id: undefined,
      },
    });
  }

  async selectManySimple(): Promise<any[]> {
    return this.prisma.discount.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        minQuantity: true,
        maxQuantity: true,
        percentage: true,
      },
    });
  }

  async selectManyNotAssociateBatch(batchId: number): Promise<any[]> {
    return this.prisma.discount.findMany({
      where: {
        state: State.ACTIVE,
        batches: {
          every: {
            id: {
              not: batchId,
            },
          },
        },
      },
      select: {
        id: true,
        minQuantity: true,
        maxQuantity: true,
        percentage: true,
        startAt: true,
        endAt: true,
      },
    });
  }
}
