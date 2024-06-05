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
import { PublisherService } from './publisher.service';
import { Response } from 'express';
import { CreatePublisherDto } from './dto/create_publisher.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdatePublisherDto } from './dto/update_publisher.dto';

@Controller('publisher')
@ApiTags('PUBLISHER')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  async buildPublisherListPage(@Res() res: Response): Promise<void> {
    const publishers = await this.publisherService.selectMany();
    res.render('./view_publisher_list/view_publisher_list_page', {
      publishers,
    });
  }

  @Post()
  async postPublisher(@Body() createDto: CreatePublisherDto) {
    const result = this.publisherService.insert(createDto);
    return result;
  }

  @Delete(':id')
  async deletePublisher(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      await this.publisherService.delete(id);
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
  async patchPublisher(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdatePublisherDto,
  ): Promise<any> {
    return this.publisherService.update(id, updateDto);
  }
}
