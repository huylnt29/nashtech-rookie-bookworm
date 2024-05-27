import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { State } from '@prisma/client';
import { CreateReviewDto } from './dto/review.create.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<any> {
    return this.prisma.review.findMany({
      where: {
        state: State.ACTIVE,
      },
      select: {
        id: true,
        author: true,
        rating: true,
        book: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async insert(createDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: createDto,
      select: {
        id: true,
      },
    });
  }

  async deactivate(id: number) {
    return this.prisma.review.update({
      where: {
        id: id,
      },
      data: {
        state: State.INACTIVE,
      },
    });
  }

  async selectOne(id: number) {
    return this.prisma.review.findFirst({
      where: {
        id: id,
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            imageUrls: true,
          },
        },
      },
    });
  }
}
