import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Book, State } from '@prisma/client';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { S3Service } from 'src/core/s3/s3.service';

@Injectable()
export class BookService {
  constructor(
    private prisma: PrismaService,
    private s3: S3Service,
  ) {}

  async selectBooks(): Promise<any> {
    return this.prisma.book.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        name: true,
        publishedYear: true,
        updatedAt: true,
        category: {
          select: {
            name: true,
          },
        },
        publisher: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async insertBook(
    images: Array<Express.Multer.File>,
    createBookDto: CreateBookDto,
  ): Promise<any> {
    const imageUrls = [];
    for (const image of images) {
      let res = await this.s3.uploadImage(image);
      imageUrls.push(res.Location);
    }
    return this.prisma.book.create({
      data: {
        name: createBookDto.name,
        description: createBookDto.description,
        publishedYear: 2024,
        publisherId: createBookDto.publisherId,
        categoryId: createBookDto.categoryId,
        authors: {
          connect: createBookDto.authorIds?.map((e) => ({
            id: e,
          })),
        },
        imageUrls: imageUrls,
      },
      select: {
        id: true,
      },
    });
  }

  async updateBook(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        ...updateBookDto,
        id: undefined,
      },
    });
  }

  async selectAuthors(): Promise<any> {
    return this.prisma.author.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectCategories(): Promise<any> {
    return this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async selectPublishers(): Promise<any> {
    return this.prisma.publisher.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
