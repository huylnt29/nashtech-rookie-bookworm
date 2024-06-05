import { ObjectType } from '@nestjs/graphql';
import { Batch } from './batch.entity';
import { PageInfo } from 'src/module/book/entity/book.page_result.entity';

@ObjectType()
export class BatchPageResult {
  data: Batch[];
  meta: PageInfo;
}
