import { Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums, Book as BookType } from '@prisma/client';
import { RestrictProperties } from 'src/core/service/graphql/common.input';

import { State } from 'src/core/service/graphql/register_enum';
import { Author } from 'src/module/author/entity/Author.entity';
import { Batch } from 'src/module/batch/entity/Batch.entity';
import { Category } from 'src/module/category/entity/Category.entity';
import { Publisher } from 'src/module/publisher/entity/Publisher.entity';
import { Review } from 'src/module/review/entity/Review.entity';

@ObjectType()
export class Book {
  id: number;
  imageUrls: string[];
  name: string;
  description: string;
  publishedYear: number;
  totalSoldQuantity: number;
  averageRating: number;

  @Field({ nullable: true })
  category: Category;
  @Field({ nullable: true })
  publisher: Publisher;
  @Field({ nullable: true })
  authors: Author[];
  @Field({ nullable: true })
  batches: Batch[];
  @Field({ nullable: true })
  reviews: Review[];
}
