import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { CreateCollectionDto } from './dto/collection.create.dto';
import { UpdateCollectionDto } from './dto/collection.update.dto';
import { CollectionType, State } from '@prisma/client';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<any[]> {
    return this.prisma.collection.findMany({
      select: {
        id: true,
        name: true,
        expiredAt: true,
        updatedAt: true,
        state: true,
        type: true,
        _count: {
          select: {
            batches: true,
          },
        },
      },
    });
  }

  async selectEverything(): Promise<any[]> {
    return this.prisma.collection.findMany({
      include: {
        batches: true,
      },
    });
  }

  async insert(createDto: CreateCollectionDto) {
    const validCreateDto = { ...createDto, batchIds: undefined };
    return this.prisma.collection.create({
      data: {
        ...validCreateDto,
        type: CollectionType.DYNAMIC,
        batches: {
          connect: createDto.batchIds?.map((e) => ({
            id: +e,
          })),
        },
      },
      select: {
        id: true,
      },
    });
  }

  async update(id: number, updateDto: UpdateCollectionDto) {
    return this.prisma.collection.update({
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
    return this.prisma.collection.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectManyNotAssociateBatch(batchId: number): Promise<any[]> {
    return this.prisma.collection.findMany({
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
        name: true,
      },
    });
  }

  async selectOne(id: number) {
    return this.prisma.collection.findFirst({
      where: {
        id: id,
      },
      include: {
        batches: {
          where: {
            state: State.ACTIVE,
          },
          select: {
            id: true,
            index: true,
            soldQuantity: true,
            price: true,
            book: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async associateBatch(id: number, batchId: number) {
    return this.prisma.collection.update({
      where: {
        id: id,
      },
      data: {
        batches: {
          connect: {
            id: batchId,
          },
        },
      },
      select: {
        id: true,
        batches: true,
      },
    });
  }

  async disassociateBatch(id: number, batchId: number) {
    return this.prisma.collection.update({
      where: {
        id: id,
      },
      data: {
        batches: {
          disconnect: {
            id: batchId,
          },
        },
      },
    });
  }
}
