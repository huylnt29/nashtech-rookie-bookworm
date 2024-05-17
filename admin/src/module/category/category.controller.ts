import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';
import { CreateCategoryDto } from './dto/create_category.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from './dto/update_category.dto';

@Controller('category')
@ApiTags('CATEGORY')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async buildCategoryListPage(@Res() res: Response): Promise<void> {
    const categories = await this.categoryService.selectCategories();
    res.render('./view_category_list/view_category_list_page', {
      categories,
    });
  }

  @Get(':id')
  async buildCategoryDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const categoryDetail = await this.categoryService.selectCategoryDetail(id);
    res.render('./view_category_detail/view_category_detail_page', {
      categoryDetail,
    });
  }

  @Post()
  async postCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const result = this.categoryService.insertCategory(createCategoryDto);
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

  @Patch(':id')
  async patchCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<any> {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }
}
