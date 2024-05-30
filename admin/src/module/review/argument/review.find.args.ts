import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewOrderByWithRelationInput } from './review.order_by.args';
import { ReviewWhereInput, ReviewWhereUniqueInput } from './review.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.ReviewScalarFieldEnum, {
  name: 'ReviewScalarFieldEnum',
});

@ArgsType()
class FindManyReviewArgsStrict
  implements
    RestrictProperties<
      FindManyReviewArgsStrict,
      Omit<Prisma.ReviewFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => ReviewWhereInput, { nullable: true })
  where: ReviewWhereInput;
  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy: ReviewOrderByWithRelationInput[];
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor: ReviewWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.ReviewScalarFieldEnum], { nullable: true })
  distinct: Prisma.ReviewScalarFieldEnum[];
}

@ArgsType()
export class FindManyReviewArgs extends PartialType(FindManyReviewArgsStrict) {}

@ArgsType()
export class FindUniqueReviewArgs {
  @Field({ nullable: true })
  where: ReviewWhereUniqueInput;
}
