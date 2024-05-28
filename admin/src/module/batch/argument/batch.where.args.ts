import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { State } from 'src/core/graphql/register_enum';
import { BookRelationFilter } from 'src/module/book/argument/book.where.args';
import { DiscountRelationFilter } from 'src/module/discount/argument/discount.where.args';

@InputType()
export class BatchWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<BatchWhereInput, Prisma.BatchWhereInput>
export class BatchWhereInputStrict {
  id: number;
  @Field(() => State)
  state: $Enums.State;
  book: BookRelationFilter;
  discount: DiscountRelationFilter;

  AND: BatchWhereInput[];
  OR: BatchWhereInput[];
  NOT: BatchWhereInput[];
}

@InputType()
export class BatchWhereInput extends PartialType(BatchWhereInputStrict) {}

@InputType()
export class BatchListRelationFilter {
  every?: BatchWhereInput;
  some?: BatchWhereInput;
  none?: BatchWhereInput;
}

@InputType()
export class BatchRelationFilter {
  is?: BatchWhereInput;
  isNot?: BatchWhereInput;
}
