import { Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums, Category as CategoryType } from '@prisma/client';
import { RestrictProperties } from 'src/core/graphql/common.input';

@ObjectType()
export class Category implements RestrictProperties<Category, CategoryType> {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
