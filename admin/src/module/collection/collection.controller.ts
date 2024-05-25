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
import { CollectionService } from './collection.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { BatchService } from '../batch/batch.service';
import { CreateCollectionDto } from './dto/create_collection.dto';
import { UpdateCollectionDto } from './dto/update_collection.dto';

@Controller('collection')
@ApiTags('COLLECTION')
export class CollectionController {
  constructor(
    private readonly collectionService: CollectionService,
    private readonly batchService: BatchService,
  ) {}

  @Get()
  async buildCollectionListPage(@Res() res: Response) {
    const collections = await this.collectionService.selectMany();
    res.render('./view_collection_list/view_collection_list_page', {
      collections,
    });
  }

  @Get('/everything')
  async getCollections() {
    return this.collectionService.selectEverything();
  }

  @Get('/new')
  async buildCreateCollectionPage(@Res() res: Response) {
    const batches = await this.batchService.selectManySimple();
    res.render('./create_collection/create_collection_page', {
      batches,
    });
  }

  @Post()
  async postCollection(@Body() createDto: CreateCollectionDto) {
    const newDiscount = await this.collectionService.insert(createDto);
    return newDiscount;
  }

  @Get(':id')
  async buildCollectionDetailPage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const collection = await this.collectionService.selectOne(id);
    res.render('./view_collection_detail/view_collection_detail_page', {
      collection,
    });
  }

  @Patch(':id')
  async patchCollection(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCollectionDto,
  ): Promise<any> {
    return this.collectionService.update(id, updateDto);
  }
}
