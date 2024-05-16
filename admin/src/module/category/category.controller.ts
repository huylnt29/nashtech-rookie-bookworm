import { Controller, Get, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async buildCategoryListPage(@Res() res: Response): Promise<void> {
    const categories = await this.categoryService.categories();
    res.render('view_category_list', {
      categories,
    });
  }
}
