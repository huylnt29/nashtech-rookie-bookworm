import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Batch } from './entity/batch.entity';
import {
  FindManyBatchArgs,
  FindUniqueBatchArgs,
} from './argument/batch.find.args';

@Resolver(() => Batch)
export class BatchResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Batch], { name: 'batches' })
  findAll(@Args() args: FindManyBatchArgs) {
    return this.prismaService.batch.findMany(args);
  }

  @Query(() => Batch, { name: 'batch' })
  findOne(@Args() args: FindUniqueBatchArgs) {
    return this.prismaService.batch.findUnique(args);
  }
}
