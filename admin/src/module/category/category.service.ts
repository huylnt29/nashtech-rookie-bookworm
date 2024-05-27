import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Category, State } from '@prisma/client';
import { CreateCategoryDto } from './dto/category.create.dto';
import { UpdateCategoryDto } from './dto/category.update.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: {
        _count: {
          select: {
            books: {
              where: {
                state: State.ACTIVE,
              },
            },
          },
        },
      },
    });
  }

  async insert(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
      select: {
        id: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }

  async selectOne(id: number) {
    return this.prisma.category.findFirst({
      where: {
        id: id,
      },
      include: {
        books: {
          where: {
            state: State.ACTIVE,
          },
          select: {
            id: true,
            name: true,
            publishedYear: true,
          },
        },
      },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id: id,
      },
      data: {
        ...updateCategoryDto,
        id: undefined,
      },
    });
  }

  async selectManySimple(): Promise<any> {
    return this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectManyNotAssociateBook(bookId: number): Promise<any> {
    return this.prisma.category.findMany({
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
