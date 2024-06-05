import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class BookOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  totalSoldQuantity: Prisma.SortOrder;
}

@InputType()
export class BookOrderByWithRelationInput extends PartialType(
  BookOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
