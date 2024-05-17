import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from './dto/create_category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async selectCategories(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: {
        _count: {
          select: { books: true },
        },
      },
    });
  }

  async insertCategory(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
      },
      select: {
        id: true,
      },
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }

  async selectCategoryDetail(id: number) {
    return this.prisma.category.findFirst({
      where: {
        id: id,
      },
      include: {
        books: true,
      },
    });
  }
}
