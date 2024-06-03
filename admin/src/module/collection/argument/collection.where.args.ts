import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BatchListRelationFilter } from 'src/module/batch/argument/batch.where.args';

@InputType()
export class CollectionWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
  @Field(() => String, { nullable: true })
  code: string;
}

@InputType()
// implements RestrictProperties<CollectionWhereInput, Prisma.CollectionWhereInput>
export class CollectionWhereInputStrict {
  id: number;

  batches: BatchListRelationFilter;

  AND: CollectionWhereInput[];
  OR: CollectionWhereInput[];
  NOT: CollectionWhereInput[];
}

@InputType()
export class CollectionWhereInput extends PartialType(
  CollectionWhereInputStrict,
) {}

@InputType()
export class CollectionListRelationFilter {
  every?: CollectionWhereInput;
  some?: CollectionWhereInput;
  none?: CollectionWhereInput;
}

@InputType()
export class CollectionRelationFilter {
  is?: CollectionWhereInput;
  isNot?: CollectionWhereInput;
}
