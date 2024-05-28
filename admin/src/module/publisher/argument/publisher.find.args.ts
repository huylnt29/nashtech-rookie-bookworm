import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { RestrictProperties } from 'src/core/graphql/common.input';
import {
  PublisherWhereInput,
  PublisherWhereUniqueInput,
} from './publisher.where.args';
import { PublisherOrderByWithRelationInput } from './publisher.order_by.args';

registerEnumType(Prisma.PublisherScalarFieldEnum, {
  name: 'PublisherScalarFieldEnum',
});

@ArgsType()
class FindManyPublisherArgsStrict
  implements
    RestrictProperties<
      FindManyPublisherArgsStrict,
      Omit<Prisma.PublisherFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => PublisherWhereInput, { nullable: true })
  where: PublisherWhereInput;
  @Field(() => [PublisherOrderByWithRelationInput], { nullable: true })
  orderBy: PublisherOrderByWithRelationInput[];
  @Field(() => PublisherWhereUniqueInput, { nullable: true })
  cursor: PublisherWhereUniqueInput;
  @Field(() => Number, { nullable: true })
  take: number;
  @Field(() => Number, { nullable: true })
  skip: number;
  @Field(() => [Prisma.PublisherScalarFieldEnum], { nullable: true })
  distinct: Prisma.PublisherScalarFieldEnum[];
}

@ArgsType()
export class FindManyPublisherArgs extends PartialType(
  FindManyPublisherArgsStrict,
) {}

@ArgsType()
export class FindUniquePublisherArgs {
  @Field({ nullable: true })
  where: PublisherWhereUniqueInput;
}
