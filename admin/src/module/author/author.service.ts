import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { Author } from '@prisma/client';
import { CreateAuthorDto } from './dto/create_author.dto';
import { UpdateAuthorDto } from './dto/update_author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<Author[]> {
    return this.prisma.author.findMany({
      include: {
        _count: {
          select: { books: true },
        },
      },
    });
  }

  async insert(createDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createDto,
      select: {
        id: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.author.delete({
      where: {
        id: id,
      },
    });
  }

  async selectDetail(id: number) {
    return this.prisma.author.findFirst({
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

  async update(id: number, updateDto: UpdateAuthorDto) {
    return this.prisma.author.update({
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
    return this.prisma.author.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectManyNotAssociateBook(bookId: number): Promise<any> {
    return this.prisma.author.findMany({
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
