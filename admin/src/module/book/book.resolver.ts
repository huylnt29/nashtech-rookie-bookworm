import { Args, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entity/book.entity';
import { BookService } from './book.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { BookArg } from './dto/book.arg';
import { FindManyBookArgs } from './dto/find.args';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], { name: 'books' })
  findAll(@Args() bookArg: FindManyBookArgs) {
    return this.bookService.findAll(bookArg);
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id') id: number) {
    return this.bookService.findOne(id);
  }
}
