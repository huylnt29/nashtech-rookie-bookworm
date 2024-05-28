import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BookListRelationFilter } from 'src/module/book/argument/book.where.args';

@InputType()
export class PublisherWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<PublisherWhereInput, Prisma.PublisherWhereInput>
export class PublisherWhereInputStrict {
  id: number;

  books: BookListRelationFilter;

  AND: PublisherWhereInput[];
  OR: PublisherWhereInput[];
  NOT: PublisherWhereInput[];
}

@InputType()
export class PublisherWhereInput extends PartialType(
  PublisherWhereInputStrict,
) {}

@InputType()
export class CategoryListRelationFilter {
  every?: PublisherWhereInput;
  some?: PublisherWhereInput;
  none?: PublisherWhereInput;
}

@InputType()
export class CategoryRelationFilter {
  is?: PublisherWhereInput;
  isNot?: PublisherWhereInput;
}
