import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/core/service/prisma/prisma.service';

import { Discount } from './entity/discount.entity';
import {
  FindManyDiscountArgs,
  FindUniqueDiscountArgs,
} from './argument/discount.find.args';

@Resolver(() => Discount)
export class DiscountResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Discount], { name: 'discounts' })
  findAll(@Args() args: FindManyDiscountArgs) {
    return this.prismaService.discount.findMany({
      ...args,
      include: {
        batches: true,
      },
    });
  }

  @Query(() => Discount, { name: 'discount' })
  findOne(@Args() args: FindUniqueDiscountArgs) {
    return this.prismaService.discount.findUnique(args);
  }
}
