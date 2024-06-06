import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Discount as DiscountType } from '@prisma/client';
import { RestrictProperties } from 'src/core/service/graphql/common.input';
import { State } from 'src/core/service/graphql/register_enum';

@ObjectType()
export class Discount implements RestrictProperties<Discount, DiscountType> {
  id: number;
  minQuantity: number;
  maxQuantity: number;
  percentage: number;
  startAt: Date;
  endAt: Date;
  isRecurring: boolean;
  createdAt: Date;
  updatedAt: Date;
  @Field(() => State)
  state: $Enums.State;
}
