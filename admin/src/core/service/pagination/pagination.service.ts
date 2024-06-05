import { Injectable } from '@nestjs/common';
import { PageResult } from './page_result.interface';
import { PaginationOptions } from './pagination_options.type';

export interface ConditionArgs {
  where: any;
  include: any;
  select: any;
  orderBy: any;
}

@Injectable()
export class PaginationService {
  async paginate<T = any>(
    prismaDelegate: any,
    args: Partial<ConditionArgs>,
    options: PaginationOptions,
  ): Promise<PageResult<T>> {
    const page = options.page ? parseInt(options.page as string) : 1;
    const limit = options.limit ? parseInt(options.limit as string) : 5;

    const condition = args.include
      ? {
          where: args.where,
          include: args.include,
          orderBy: args.orderBy,
        }
      : {
          where: args.where,
          select: args.select,
          orderBy: args.orderBy,
        };

    const skip = page > 0 ? limit * (page - 1) : 0;

    const [total, data] = await Promise.all([
      prismaDelegate.count({
        where: condition.where,
      }),
      prismaDelegate.findMany({
        ...condition,
        skip,
        take: limit,
      }),
    ]);

    return {
      data,
      meta: {
        totalItems: total,
        page: page > 0 ? page : 1,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
