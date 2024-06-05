import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { Batch } from './entity/batch.entity';
import {
  FindManyBatchArgs,
  FindUniqueBatchArgs,
} from './argument/batch.find.args';
import { PaginationService } from 'src/core/service/pagination/pagination.service';
import { BatchPageResult } from './entity/batch.page_result.entity';

@Resolver(() => Batch)
export class BatchResolver {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paginationService: PaginationService,
  ) {}

  @Query(() => BatchPageResult, { name: 'batches' })
  findAll(@Args() args: FindManyBatchArgs) {
    return this.paginationService.paginate(
      this.prismaService.batch,
      {
        ...args,
        include: {
          book: true,
          discount: true,
        },
      },
      {
        page: args.page,
        limit: args.limit,
      },
    );
  }

  @Query(() => Batch, { name: 'batch' })
  findOne(@Args() args: FindUniqueBatchArgs) {
    return this.prismaService.batch.findUnique(args);
  }
}
