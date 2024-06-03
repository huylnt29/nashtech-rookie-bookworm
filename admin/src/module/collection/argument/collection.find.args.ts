import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CollectionOrderByWithRelationInput } from './collection.order_by.args';
import {
  CollectionWhereInput,
  CollectionWhereUniqueInput,
} from './collection.where.args';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

registerEnumType(Prisma.CollectionScalarFieldEnum, {
  name: 'CollectionScalarFieldEnum',
});

@ArgsType()
class FindManyCollectionArgsStrict
  implements
    RestrictProperties<
      FindManyCollectionArgsStrict,
      Omit<Prisma.CollectionFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => CollectionWhereInput, { nullable: true })
  where: CollectionWhereInput;
  @Field(() => [CollectionOrderByWithRelationInput], { nullable: true })
  orderBy: CollectionOrderByWithRelationInput[];
  @Field(() => CollectionWhereUniqueInput, { nullable: true })
  cursor: CollectionWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.CollectionScalarFieldEnum], { nullable: true })
  distinct: Prisma.CollectionScalarFieldEnum[];
}

@ArgsType()
export class FindManyCollectionArgs extends PartialType(
  FindManyCollectionArgsStrict,
) {}

@ArgsType()
export class FindUniqueCollectionArgs {
  @Field({ nullable: true })
  where: CollectionWhereUniqueInput;
}
