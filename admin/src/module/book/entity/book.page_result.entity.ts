import { ObjectType } from '@nestjs/graphql';
import { Book } from 'src/module/book/entity/Book.entity';

@ObjectType()
export class BookPageResult {
  data: Book[];
  meta: PageInfo;
}

@ObjectType()
export class PageInfo {
  totalItems: number;
  page: number;
  totalPages: number;
}
