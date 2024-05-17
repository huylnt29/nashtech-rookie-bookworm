import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Book } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';

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
}
