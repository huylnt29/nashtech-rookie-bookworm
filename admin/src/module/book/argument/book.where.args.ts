import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/core/service/graphql/common.input';
import { AuthorListRelationFilter } from 'src/module/author/argument/author.where.args';
import {
  CategoryListRelationFilter,
  CategoryRelationFilter,
} from 'src/module/category/argument/category.where.args';
import { ReviewListRelationFilter } from 'src/module/review/argument/review.where.args';

@InputType()
export class BookWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<BookWhereInput, Prisma.BookWhereInput>
export class BookWhereInputStrict {
  @Field({ nullable: true })
  id: IntFilter;
  @Field({ nullable: true })
  averageRating: IntFilter;
  @Field({ nullable: true })
  category: CategoryRelationFilter;

  authors: AuthorListRelationFilter;
  reviews: ReviewListRelationFilter;

  @Field({ nullable: true })
  search: StringFilter;

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
