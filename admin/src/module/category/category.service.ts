import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from './dto/create_category.dto';
import { UpdateCategoryDto } from './dto/update_category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: {
        _count: {
          select: { books: true },
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
}
