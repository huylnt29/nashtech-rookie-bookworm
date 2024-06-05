import { ObjectType } from '@nestjs/graphql';
import { Author as AuthorType } from '@prisma/client';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

@ObjectType()
export class Author implements RestrictProperties<Author, AuthorType> {
  id: number;
  name: string;
}
