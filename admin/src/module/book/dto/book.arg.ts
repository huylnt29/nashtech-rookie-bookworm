import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Max, Min } from 'class-validator';

@ArgsType()
export class BookArg {
  @Field((type) => Int)
  @Min(0)
  skip: number;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take: number;
}
