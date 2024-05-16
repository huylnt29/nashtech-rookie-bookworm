import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Book } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async books(): Promise<Book[]> {
     return this.prisma.book.findMany();
   }
}