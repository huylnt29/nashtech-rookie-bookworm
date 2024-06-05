import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BatchOrderByWithRelationInput } from './batch.order_by.args';
import { BatchWhereInput, BatchWhereUniqueInput } from './batch.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.BatchScalarFieldEnum, {
  name: 'BatchScalarFieldEnum',
});

@ArgsType()
class FindManyBatchArgsStrict {
  @Field(() => BatchWhereInput, { nullable: true })
  where: BatchWhereInput;
  @Field(() => [BatchOrderByWithRelationInput], { nullable: true })
  orderBy: BatchOrderByWithRelationInput[];
  @Field(() => BatchWhereUniqueInput, { nullable: true })
  cursor: BatchWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  page: number;
  @Field(() => Number, { nullable: true })
  limit: number;
  @Field(() => [Prisma.BatchScalarFieldEnum], { nullable: true })
  distinct: Prisma.BatchScalarFieldEnum[];
}

@ArgsType()
export class FindManyBatchArgs extends PartialType(FindManyBatchArgsStrict) {}

@ArgsType()
export class FindUniqueBatchArgs {
  @Field({ nullable: true })
  where: BatchWhereUniqueInput;
}
