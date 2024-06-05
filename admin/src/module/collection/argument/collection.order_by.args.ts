import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CollectionOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
}

@InputType()
export class CollectionOrderByWithRelationInput extends PartialType(
  CollectionOrderByWithRelationInputStrict,
) {}

@InputType()
export class CollectionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
