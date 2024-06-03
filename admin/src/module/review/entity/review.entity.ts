import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Review {
  id: number;
  author: string;
  @Field({ nullable: true })
  content: string;
  @Field({ nullable: true })
  rating: number;
  bookId: number;
  createdAt: Date;
  updatedAt: Date;
}
