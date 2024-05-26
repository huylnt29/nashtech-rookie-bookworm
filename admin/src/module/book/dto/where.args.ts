import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import { IntFilter, RestrictProperties } from 'src/core/dto/common.input';
import { State } from 'src/core/enum/state.enum';

@InputType()
export class BookWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class BookWhereInputStrict {
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
