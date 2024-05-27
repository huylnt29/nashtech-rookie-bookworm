import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BookListRelationFilter } from 'src/module/book/argument/book.where.args';

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
