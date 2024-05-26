import { Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums, Book as BookType } from '@prisma/client';
import { RestrictProperties } from 'src/core/graphql/common.input';

import { State } from 'src/core/graphql/register_enum';

@ObjectType()
export class Book implements RestrictProperties<Book, BookType> {
  @Field(() => Int)
  id: number;
  imageUrls: string[];
  name: string;
  description: string;
  publishedYear: number;
  publisherId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  @Field(() => State)
  state: $Enums.State;
}