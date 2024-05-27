import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { RestrictProperties } from 'src/core/graphql/common.input';
import { BookOrderByWithRelationInput } from './book.order_by.args';
import { BookWhereInput, BookWhereUniqueInput } from './book.where.args';

registerEnumType(Prisma.BookScalarFieldEnum, {
  name: 'BookScalarFieldEnum',
});

@ArgsType()
// implements
//   RestrictProperties<
//     FindManyBookArgsStrict,
//     Omit<Prisma.BookFindManyArgs, 'include' | 'select'>
//   >
class FindManyBookArgsStrict {
  @Field(() => BookWhereInput, { nullable: true })
  where: BookWhereInput;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy: BookOrderByWithRelationInput[];
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor: BookWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  page: number;
  @Field(() => Number, { nullable: true })
  limit: number;
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
