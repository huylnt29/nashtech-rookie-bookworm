import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Book, State } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async selectBooks(): Promise<any> {
    return this.prisma.book.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        name: true,
        publishedYear: true,
        updatedAt: true,
        category: {
          select: {
            name: true,
          },
        },
        publisher: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async insertBook(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        name: createBookDto.name,
        description: createBookDto.description,
        publishedYear: createBookDto.publishedYear,
        publisherId: createBookDto.publisherId,
        categoryId: createBookDto.categoryId,
        authors: {
          connect: createBookDto.authorIds.map((e) => ({
            id: e,
          })),
        },
      },
      select: {
        id: true,
      },
    });
  }

  async updateBook(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        ...updateBookDto,
        id: undefined,
      },
    });
  }
}
