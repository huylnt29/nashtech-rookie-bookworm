import { Controller, Get } from '@nestjs/common';
import { Category as CategoryModel } from '@prisma/client';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async buildCategoryListPage(): Promise<CategoryModel[]> {
    return this.categoryService.categories();
  }
}
