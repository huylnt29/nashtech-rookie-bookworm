import * as request from 'supertest';
import { Test } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';

import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { S3Service } from 'src/core/service/s3/s3.service';
import { AuthorService } from 'src/module/author/author.service';
import { BookController } from 'src/module/book/book.controller';
import { BookService } from 'src/module/book/book.service';
import { CategoryService } from 'src/module/category/category.service';
import { PublisherService } from 'src/module/publisher/publisher.service';

describe('BookController (e2e)', () => {
  let app: INestApplication;
  let bookService: BookService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        PrismaService,
        BookService,
        S3Service,
        AuthorService,
        PublisherService,
        CategoryService,
      ],
    })
      .overrideProvider(BookService)
      .useValue(bookService)
      .compile();
    bookService = moduleRef.get<BookService>(BookService);
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`GET /book/everything`, async () => {
    const res = await request(app.getHttpServer()).get('/book/everything');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(expect.arrayContaining([]));
  });

  afterEach(async () => {
    await app.close();
  });
});
