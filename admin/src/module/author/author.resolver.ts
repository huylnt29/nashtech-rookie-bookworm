import { Args, Query, Resolver } from '@nestjs/graphql';
import { Author } from './entity/Author.entity';

import { PrismaService } from 'src/core/prisma/prisma.service';
import {
  FindManyAuthorArgs,
  FindUniqueAuthorArgs,
} from './argument/author.find.args';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Author], { name: 'authors' })
  findAll(@Args() args: FindManyAuthorArgs) {
    return this.prismaService.author.findMany(args);
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args() args: FindUniqueAuthorArgs) {
    return this.prismaService.author.findUnique(args);
  }
}
