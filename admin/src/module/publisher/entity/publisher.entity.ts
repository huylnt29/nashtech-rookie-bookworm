import { ObjectType } from '@nestjs/graphql';
import { Publisher as PublisherType } from '@prisma/client';
import { RestrictProperties } from 'src/core/graphql/common.input';

@ObjectType()
export class Publisher implements RestrictProperties<Publisher, PublisherType> {
  id: number;
  name: string;
}
