import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class DiscountOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  percentage: Prisma.SortOrder;
}

@InputType()
export class DiscountOrderByWithRelationInput extends PartialType(
  DiscountOrderByWithRelationInputStrict,
) {}

@InputType()
export class DiscountOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
