import { Args, Query, Resolver } from '@nestjs/graphql';
import { Category } from './entity/Category.entity';
import { CategoryService } from './Category.service';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import {
  FindManyCategoryArgs,
  FindUniqueCategoryArgs,
} from './argument/category.find.args';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Category], { name: 'categories' })
  findAll(@Args() args: FindManyCategoryArgs) {
    return this.prismaService.category.findMany(args);
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args() args: FindUniqueCategoryArgs) {
    return this.prismaService.category.findUnique(args);
  }
}
