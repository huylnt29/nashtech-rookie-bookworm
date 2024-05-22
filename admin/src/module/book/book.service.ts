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

  async selectMany(): Promise<any> {
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

  async insert(
    images: Array<Express.Multer.File>,
    createBookDto: CreateBookDto,
  ): Promise<any> {
    const imageUrls = [];
    if (images) {
      for (const image of images) {
        let res = await this.s3.uploadImage(image);
        imageUrls.push(res.Location);
      }
    }
    let authors = [];
    if (Array.isArray(createBookDto.authorIds)) {
      authors = createBookDto.authorIds?.map((e) => ({
        id: +e,
      }));
    } else if (parseInt(createBookDto.authorIds)) {
      authors.push({
        id: +createBookDto.authorIds,
      });
    }

    return this.prisma.book.create({
      data: {
        name: createBookDto.name,
        description: createBookDto.description,
        publishedYear: +createBookDto.publishedYear,
        publisherId: +createBookDto.publisherId,
        categoryId: +createBookDto.categoryId,
        authors: {
          connect: authors,
        },
        imageUrls: imageUrls,
      },
      select: {
        id: true,
      },
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
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

  async selectOne(id: number) {
    return this.prisma.book.findFirst({
      where: {
        id: id,
      },
      include: {
        category: true,
        publisher: true,
        authors: true,
        reviews: {
          where: {
            state: State.ACTIVE,
          },
          select: {
            id: true,
            author: true,
            content: true,
            rating: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async deactivate(id: number) {
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        state: State.INACTIVE,
      },
    });
  }

  async disassociateAuthor(id: number, authorId: number) {
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        authors: {
          disconnect: {
            id: authorId,
          },
        },
      },
    });
  }

  async associateAuthor(id: number, authorId: number) {
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        authors: {
          connect: {
            id: authorId,
          },
        },
      },
      select: {
        id: true,
        authors: true,
      },
    });
  }

  async addImage(id: number, image: Express.Multer.File) {
    let res = await this.s3.uploadImage(image);
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        imageUrls: {
          push: res.Location,
        },
      },
      select: {
        id: true,
        imageUrls: true,
      },
    });
  }

  async deleteImage(id: number, imageUrl: string) {
    let { imageUrls } = await this.prisma.book.findFirst({
      where: {
        id: id,
      },
      select: {
        imageUrls: true,
      },
    });
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        imageUrls: {
          set: imageUrls.filter((e) => e !== imageUrl),
        },
      },
    });
  }
}
