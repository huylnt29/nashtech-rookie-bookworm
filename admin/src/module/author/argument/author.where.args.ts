import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BookListRelationFilter } from 'src/module/book/argument/book.where.args';

@InputType()
export class AuthorWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<AuthorWhereInput, Prisma.AuthorWhereInput>
export class AuthorWhereInputStrict {
  id: number;

  books: BookListRelationFilter;

  AND: AuthorWhereInput[];
  OR: AuthorWhereInput[];
  NOT: AuthorWhereInput[];
}

@InputType()
export class AuthorWhereInput extends PartialType(AuthorWhereInputStrict) {}

@InputType()
export class AuthorListRelationFilter {
  every?: AuthorWhereInput;
  some?: AuthorWhereInput;
  none?: AuthorWhereInput;
}

@InputType()
export class AuthorRelationFilter {
  is?: AuthorWhereInput;
  isNot?: AuthorWhereInput;
}
