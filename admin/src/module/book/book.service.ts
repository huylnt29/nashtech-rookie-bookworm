import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Book } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async selectBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
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
