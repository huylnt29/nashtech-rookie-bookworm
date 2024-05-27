import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BookRelationFilter } from 'src/module/book/argument/book.where.args';

@InputType()
export class DiscountWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<DiscountWhereInput, Prisma.DiscountWhereInput>
export class DiscountWhereInputStrict {
  id: number;
  percentage: number;

  AND: DiscountWhereInput[];
  OR: DiscountWhereInput[];
  NOT: DiscountWhereInput[];
}

@InputType()
export class DiscountWhereInput extends PartialType(DiscountWhereInputStrict) {}

@InputType()
export class DiscountListRelationFilter {
  every?: DiscountWhereInput;
  some?: DiscountWhereInput;
  none?: DiscountWhereInput;
}

@InputType()
export class DiscountRelationFilter {
  is?: DiscountWhereInput;
  isNot?: DiscountWhereInput;
}
