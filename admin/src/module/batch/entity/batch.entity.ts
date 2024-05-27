import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Batch as BatchType } from '@prisma/client';
import { RestrictProperties } from 'src/core/graphql/common.input';
import { State } from 'src/core/graphql/register_enum';

@ObjectType()
export class Batch implements RestrictProperties<Batch, BatchType> {
  id: number;
  index: number;
  initialQuantity: number;
  soldQuantity: number;
  originalPrice: number;
  price: number;
  bookId: number;
  discountId: number;
  importedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  @Field(() => State)
  state: $Enums.State;
}
