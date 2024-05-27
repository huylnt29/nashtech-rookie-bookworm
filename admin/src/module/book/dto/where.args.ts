import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import { IntFilter, RestrictProperties } from 'src/core/graphql/common.input';

@InputType()
export class BookWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
// implements RestrictProperties<BookWhereInput, Prisma.BookWhereInput>
export class BookWhereInputStrict {
  @Field(() => Number, { nullable: true })
  categoryId: number;

  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  AND: BookWhereInput[];
  OR: BookWhereInput[];
  NOT: BookWhereInput[];
}

@InputType()
export class BookWhereInput extends PartialType(BookWhereInputStrict) {}

@InputType()
export class BookListRelationFilter {
  every?: BookWhereInput;
  some?: BookWhereInput;
  none?: BookWhereInput;
}

@InputType()
export class BookRelationFilter {
  is?: BookWhereInput;
  isNot?: BookWhereInput;
}
