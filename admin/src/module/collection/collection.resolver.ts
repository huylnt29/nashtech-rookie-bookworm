import { Args, Query, Resolver } from '@nestjs/graphql';
import { Collection } from './entity/collection.entity';
import { CollectionService } from './Collection.service';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import {
  FindManyCollectionArgs,
  FindUniqueCollectionArgs,
} from './argument/collection.find.args';
import { State } from '@prisma/client';

@Resolver(() => Collection)
export class CollectionResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Collection], { name: 'collections' })
  findAll(@Args() args: FindManyCollectionArgs) {
    return this.prismaService.collection.findMany({
      ...args,
      where: {
        state: State.ACTIVE,
      },
      include: {
        batches: {
          include: {
            book: true,
          },
        },
      },
    });
  }

  @Query(() => Collection, { name: 'collection' })
  findOne(@Args() args: FindUniqueCollectionArgs) {
    return this.prismaService.collection.findUnique(args);
  }
}
