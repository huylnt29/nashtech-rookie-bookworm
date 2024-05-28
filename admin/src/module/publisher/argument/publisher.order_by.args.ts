import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class PublisherOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
}

@InputType()
export class PublisherOrderByWithRelationInput extends PartialType(
  PublisherOrderByWithRelationInputStrict,
) {}

@InputType()
export class PublisherOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
