import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';
import { CreateCategoryDto } from './dto/create_category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async buildCategoryListPage(@Res() res: Response): Promise<void> {
    const categories = await this.categoryService.queryCategories();
    res.render('./view_category_list/view_category_list', {
      categories,
    });
  }

  @Post()
  async postCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const result = this.categoryService.createCategory(createCategoryDto);
    return result;
  }

  @Delete(':id')
  async deleteCategory(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.categoryService.deleteCategory(id);
      return res.status(HttpStatus.OK).json({
        message: 'The category has been deleted successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'There is no category contains the provided id',
      });
    }
  }
}
