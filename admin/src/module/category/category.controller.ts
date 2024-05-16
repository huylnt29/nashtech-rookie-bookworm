import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';
import { CreateCategoryDto } from './dto/create_category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async buildCategoryListPage(@Res() res: Response): Promise<void> {
    const categories = await this.categoryService.queryCategories();
    res.render('view_category_list', {
      categories,
    });
  }

  @Post()
  async postCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }
}
