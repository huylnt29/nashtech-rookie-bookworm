import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryOrderByWithRelationInput } from './category.order_by.args';
import {
  CategoryWhereInput,
  CategoryWhereUniqueInput,
} from './category.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.CategoryScalarFieldEnum, {
  name: 'CategoryScalarFieldEnum',
});

@ArgsType()
class FindManyCategoryArgsStrict
  implements
    RestrictProperties<
      FindManyCategoryArgsStrict,
      Omit<Prisma.CategoryFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => CategoryWhereInput, { nullable: true })
  where: CategoryWhereInput;
  @Field(() => [CategoryOrderByWithRelationInput], { nullable: true })
  orderBy: CategoryOrderByWithRelationInput[];
  @Field(() => CategoryWhereUniqueInput, { nullable: true })
  cursor: CategoryWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.CategoryScalarFieldEnum], { nullable: true })
  distinct: Prisma.CategoryScalarFieldEnum[];
}

@ArgsType()
export class FindManyCategoryArgs extends PartialType(
  FindManyCategoryArgsStrict,
) {}

@ArgsType()
export class FindUniqueCategoryArgs {
  @Field({ nullable: true })
  where: CategoryWhereUniqueInput;
}
