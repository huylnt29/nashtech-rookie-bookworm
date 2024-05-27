import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import { IntFilter, RestrictProperties } from 'src/core/graphql/common.input';
import { BookListRelationFilter } from 'src/module/book/dto/where.args';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<CategoryWhereInput, Prisma.CategoryWhereInput>
export class CategoryWhereInputStrict {
  id: number;

  books: BookListRelationFilter;

  AND: CategoryWhereInput[];
  OR: CategoryWhereInput[];
  NOT: CategoryWhereInput[];
}

@InputType()
export class CategoryWhereInput extends PartialType(CategoryWhereInputStrict) {}

@InputType()
export class CategoryListRelationFilter {
  every?: CategoryWhereInput;
  some?: CategoryWhereInput;
  none?: CategoryWhereInput;
}

@InputType()
export class CategoryRelationFilter {
  is?: CategoryWhereInput;
  isNot?: CategoryWhereInput;
}
