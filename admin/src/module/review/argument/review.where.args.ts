import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}
@InputType()
// implements RestrictProperties<ReviewWhereInput, Prisma.ReviewWhereInput>
export class ReviewWhereInputStrict {
  id: number;
  rating: number;

  AND: ReviewWhereInput[];
  OR: ReviewWhereInput[];
  NOT: ReviewWhereInput[];
}

@InputType()
export class ReviewWhereInput extends PartialType(ReviewWhereInputStrict) {}

@InputType()
export class ReviewListRelationFilter {
  every?: ReviewWhereInput;
  some?: ReviewWhereInput;
  none?: ReviewWhereInput;
}

@InputType()
export class ReviewRelationFilter {
  is?: ReviewWhereInput;
  isNot?: ReviewWhereInput;
}
