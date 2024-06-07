import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { S3Service } from 'src/core/service/s3/s3.service';

describe('BookService', () => {
  let service: BookService;
  let prisma: PrismaService;
  let s3: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService, PrismaService, S3Service],
    }).compile();
    service = module.get<BookService>(BookService);
    prisma = module.get<PrismaService>(PrismaService);
    s3 = module.get<S3Service>(S3Service);
  });

  it('Should have the service defined', () => {
    expect(service).toBeDefined();
  });

  it('Should find a book by ID', async () => {
    const bookId = 1;
    const expectedBook = { id: 1 };
    prisma.book.findMany = jest.fn().mockReturnValueOnce(expectedBook);

    expect(await service.selectOne(bookId)).toMatchObject(expectedBook);
  });
});
