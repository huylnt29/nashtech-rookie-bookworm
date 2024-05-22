import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Publisher } from '@prisma/client';
import { CreatePublisherDto } from './dto/create_publisher.dto';
import { UpdatePublisherDto } from './dto/update_publisher.dto';

@Injectable()
export class PublisherService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<Publisher[]> {
    return this.prisma.publisher.findMany({
      include: {
        _count: {
          select: { books: true },
        },
      },
    });
  }

  async insert(createDto: CreatePublisherDto) {
    return this.prisma.publisher.create({
      data: createDto,
      select: {
        id: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.publisher.delete({
      where: {
        id: id,
      },
    });
  }

  async selectDetail(id: number) {
    return this.prisma.publisher.findFirst({
      where: {
        id: id,
      },
      include: {
        books: {
          select: {
            id: true,
            name: true,
            publishedYear: true,
          },
        },
      },
    });
  }

  async update(id: number, updateDto: UpdatePublisherDto) {
    return this.prisma.publisher.update({
      where: {
        id: id,
      },
      data: {
        ...updateDto,
        id: undefined,
      },
    });
  }

  async selectManySimple(): Promise<any> {
    return this.prisma.publisher.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectManyNotAssociateBook(bookId: number): Promise<any> {
    return this.prisma.publisher.findMany({
      where: {
        books: {
          every: {
            id: {
              not: bookId,
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
}
