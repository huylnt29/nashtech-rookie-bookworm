import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscountOrderByWithRelationInput } from './discount.order_by.args';
import {
  DiscountWhereInput,
  DiscountWhereUniqueInput,
} from './discount.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.DiscountScalarFieldEnum, {
  name: 'DiscountScalarFieldEnum',
});

@ArgsType()
class FindManyDiscountArgsStrict
  implements
    RestrictProperties<
      FindManyDiscountArgsStrict,
      Omit<Prisma.DiscountFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => DiscountWhereInput, { nullable: true })
  where: DiscountWhereInput;
  @Field(() => [DiscountOrderByWithRelationInput], { nullable: true })
  orderBy: DiscountOrderByWithRelationInput[];
  @Field(() => DiscountWhereUniqueInput, { nullable: true })
  cursor: DiscountWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.DiscountScalarFieldEnum], { nullable: true })
  distinct: Prisma.DiscountScalarFieldEnum[];
}

@ArgsType()
export class FindManyDiscountArgs extends PartialType(
  FindManyDiscountArgsStrict,
) {}

@ArgsType()
export class FindUniqueDiscountArgs {
  @Field({ nullable: true })
  where: DiscountWhereUniqueInput;
}
