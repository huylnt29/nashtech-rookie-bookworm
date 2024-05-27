import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class BatchOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
}

@InputType()
export class BatchOrderByWithRelationInput extends PartialType(
  BatchOrderByWithRelationInputStrict,
) {}

@InputType()
export class BatchOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
