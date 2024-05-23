import { Controller, Get, Res } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('batch')
@ApiTags('BATCH')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}

  @Get()
  async buildBatchListPage(@Res() res: Response): Promise<void> {
    const batches = await this.batchService.selectMany();
    res.render('./view_batch_list/view_batch_list_page', {
      batches,
    });
  }
}
