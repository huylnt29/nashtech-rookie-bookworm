import { Args, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entity/book.entity';
import { BookService } from './book.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { FindManyBookArgs, FindUniqueBookArgs } from './dto/find.dto';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Book], { name: 'books' })
  findAll(@Args() args: FindManyBookArgs) {
    return this.prismaService.book.findMany(args);
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args() args: FindUniqueBookArgs) {
    return this.prismaService.book.findUnique(args);
  }
}
