import { Args, Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from 'src/core/service/prisma/prisma.service';
import {
  FindManyAuthorArgs,
  FindUniqueAuthorArgs,
} from './argument/author.find.args';
import { Author } from './entity/Author.entity';

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
