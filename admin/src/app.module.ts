import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './module/book/book.module';
import { CategoryModule } from './module/category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthMiddleware } from './core/auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './core/service/logger/logger.middleware';
import { AuthModule } from './core/auth/auth.module';
import { PublisherModule } from './module/publisher/publisher.module';
import { AuthorModule } from './module/author/author.module';
import { BatchModule } from './module/batch/batch.module';
import { DiscountModule } from './module/discount/discount.module';
import { CollectionModule } from './module/collection/collection.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookResolver } from './module/book/book.resolver';
import { PrismaModule } from './core/service/prisma/prisma.module';
import { CategoryResolver } from './module/category/category.resolver';
import { BatchResolver } from './module/batch/batch.resolver';
import { DiscountResolver } from './module/discount/discount.resolver';
import { PaginationService } from './core/service/pagination/pagination.service';
import { AuthorResolver } from './module/author/author.resolver';
import { OrderModule } from './module/order/order.module';
import { CustomerModule } from './module/customer/customer.module';
import { ReviewModule } from './module/review/review.module';
import { CollectionResolver } from './module/collection/collection.resolver';
import { S3Module } from './core/service/s3/s3.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    S3Module,
    AuthModule,
    AuthorModule,
    PublisherModule,
    CategoryModule,
    BatchModule,
    BookModule,
    OrderModule,
    CustomerModule,
    DiscountModule,
    CollectionModule,
    ReviewModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      introspection: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PaginationService,
    BatchResolver,
    BookResolver,
    CategoryResolver,
    DiscountResolver,
    AuthorResolver,
    CollectionResolver,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/auth/(.*)', method: RequestMethod.ALL },
        { path: '/public/(.*)', method: RequestMethod.ALL },
        { path: '/graphql', method: RequestMethod.ALL },
        { path: '/swagger-ui', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}
