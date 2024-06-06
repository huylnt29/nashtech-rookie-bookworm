import { ObjectType } from '@nestjs/graphql';
import { Batch } from './Batch.entity';
import { PageInfo } from 'src/module/book/entity/Book.page_result.entity';

@ObjectType()
export class BatchPageResult {
  data: Batch[];
  meta: PageInfo;
}
