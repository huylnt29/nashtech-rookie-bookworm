import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/service/prisma/prisma.service';
import { State } from '@prisma/client';
import { CreateReviewDto } from './dto/review.create.dto';
import { log } from 'console';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async selectMany(): Promise<any> {
    return this.prisma.review.findMany({
      include: {
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
    console.log(createDto);

    if (!createDto.content && !createDto.rating) return null;
    return this.prisma.review.create({
      data: createDto,
      select: {
        id: true,
      },
    });
  }

  async updateState(id: number) {
    return this.prisma.$executeRawUnsafe(
      `UPDATE public."Review"
      SET state =
        CASE
          WHEN state = 'ACTIVE' THEN 'INACTIVE'::"State"
          ELSE 'ACTIVE'::"State"
        END
      WHERE id = ${id};
      `,
    );
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
