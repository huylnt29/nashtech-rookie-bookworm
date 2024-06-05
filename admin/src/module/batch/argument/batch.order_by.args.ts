import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookOrderByWithRelationInput } from 'src/module/book/argument/book.order_by.args';
import { DiscountOrderByWithRelationInput } from 'src/module/discount/argument/discount.order_by.args';

@InputType()
export class BatchOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  price: Prisma.SortOrder;
  @Field(() => DiscountOrderByWithRelationInput)
  discount: DiscountOrderByWithRelationInput;
  @Field(() => BookOrderByWithRelationInput)
  book: BookOrderByWithRelationInput;
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
