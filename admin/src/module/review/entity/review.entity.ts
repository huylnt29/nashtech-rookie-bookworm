import { ObjectType } from '@nestjs/graphql';
import { $Enums, Review as ReviewType } from '@prisma/client';
import { RestrictProperties } from 'src/core/graphql/common.input';

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  author: string;
  content: string;
  rating: number;
  bookId: number;
  createdAt: Date;
  updatedAt: Date;
  state: $Enums.State;
  id: number;
}
