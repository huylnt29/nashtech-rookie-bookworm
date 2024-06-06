import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Collection as CollectionType } from '@prisma/client';
import {
  CollectionLayout,
  CollectionMovement,
} from 'src/core/service/graphql/register_enum';
import { Batch } from 'src/module/batch/entity/Batch.entity';

@ObjectType()
export class Collection {
  id: number;
  @Field({ nullable: true })
  code: string;
  name: string;
  @Field({ nullable: true })
  description: string;

  @Field(() => CollectionLayout)
  layout: $Enums.CollectionLayout;
  @Field(() => CollectionMovement)
  movement: $Enums.CollectionMovement;

  expiredAt: Date;
  updatedAt: Date;

  @Field({ nullable: true })
  batches: Batch[];
}
