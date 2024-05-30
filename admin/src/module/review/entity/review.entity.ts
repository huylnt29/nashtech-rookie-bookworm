import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Review as ReviewType } from '@prisma/client';
import { RestrictProperties } from 'src/core/service/graphql/common.input';
import { State } from 'src/core/service/graphql/register_enum';

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  id: number;
  author: string;
  content: string;
  rating: number;
  bookId: number;
  createdAt: Date;
  updatedAt: Date;
  @Field(() => State)
  state: $Enums.State;
}
