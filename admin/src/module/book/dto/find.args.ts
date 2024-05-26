import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookOrderByWithRelationInput } from './order-by.args';
import { BookWhereInput, BookWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/core/dto/common.input';

registerEnumType(Prisma.BookScalarFieldEnum, {
  name: 'BookScalarFieldEnum',
});

@ArgsType()
class FindManyBookArgsStrict
  implements
    RestrictProperties<
      FindManyBookArgsStrict,
      Omit<Prisma.BookFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => BookWhereInput, { nullable: true })
  where: BookWhereInput;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy: BookOrderByWithRelationInput[];
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor: BookWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.BookScalarFieldEnum], { nullable: true })
  distinct: Prisma.BookScalarFieldEnum[];
}

@ArgsType()
export class FindManyBookArgs extends PartialType(FindManyBookArgsStrict) {}

@ArgsType()
export class FindUniqueBookArgs {
  @Field({ nullable: true })
  where: BookWhereUniqueInput;
}
