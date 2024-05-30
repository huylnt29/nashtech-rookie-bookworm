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
import { AuthorService } from './author.service';
import { Response } from 'express';
import { CreateAuthorDto } from './dto/create_author.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateAuthorDto } from './dto/update_author.dto';

@Controller('author')
@ApiTags('AUTHOR')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async buildAuthorListPage(@Res() res: Response): Promise<void> {
    const authors = await this.authorService.selectMany();
    res.render('./view_author_list/view_author_list_page', {
      authors,
    });
  }

  @Post()
  async postAuthor(@Body() createDto: CreateAuthorDto) {
    const result = this.authorService.insert(createDto);
    return result;
  }

  @Delete(':id')
  async deleteAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.authorService.delete(id);
      return res.status(HttpStatus.OK).json({
        message: 'The author has been deleted successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'There is no author contains the provided id',
      });
    }
  }

  @Patch(':id')
  async patchAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateAuthorDto,
  ): Promise<any> {
    return this.authorService.update(id, updateDto);
  }
}
