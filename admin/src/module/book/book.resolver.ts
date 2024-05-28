import { Args, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entity/book.entity';
import { PrismaService } from 'src/core/prisma/prisma.service';
import {
  FindManyBookArgs,
  FindUniqueBookArgs,
} from './argument/book.find.args';
import { PaginationService } from 'src/core/pagination/pagination.service';
import { BookPageResult } from './entity/book.page_result.entity';
import { BookStatus, State } from '@prisma/client';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paginationService: PaginationService,
  ) {}

  @Query(() => BookPageResult, { name: 'books' })
  findAll(@Args() args: FindManyBookArgs) {
    return this.paginationService.paginate(
      this.prismaService.book,
      {
        ...args,
        where: {
          status: BookStatus.PUBLISHED,
        },
        include: {
          batches: {
            where: {
              state: State.ACTIVE,
            },
            include: {
              discount: {
                where: {
                  state: State.ACTIVE,
                },
              },
            },
          },
        },
      },
      {
        page: args.page,
        limit: args.limit,
      },
    );
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args() args: FindUniqueBookArgs) {
    return this.prismaService.book.findUnique(args);
  }
}
