import { ObjectType } from '@nestjs/graphql';
import { Category as CategoryType } from '@prisma/client';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

@ObjectType()
export class Category implements RestrictProperties<Category, CategoryType> {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
