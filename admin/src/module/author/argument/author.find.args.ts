import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorOrderByWithRelationInput } from './author.order_by.args';
import { AuthorWhereInput, AuthorWhereUniqueInput } from './author.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.AuthorScalarFieldEnum, {
  name: 'AuthorScalarFieldEnum',
});

@ArgsType()
class FindManyAuthorArgsStrict
  implements
    RestrictProperties<
      FindManyAuthorArgsStrict,
      Omit<Prisma.AuthorFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => AuthorWhereInput, { nullable: true })
  where: AuthorWhereInput;
  @Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy: AuthorOrderByWithRelationInput[];
  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor: AuthorWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.AuthorScalarFieldEnum], { nullable: true })
  distinct: Prisma.AuthorScalarFieldEnum[];
}

@ArgsType()
export class FindManyAuthorArgs extends PartialType(FindManyAuthorArgsStrict) {}

@ArgsType()
export class FindUniqueAuthorArgs {
  @Field({ nullable: true })
  where: AuthorWhereUniqueInput;
}
