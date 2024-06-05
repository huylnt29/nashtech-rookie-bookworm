import { Prisma } from '@prisma/client';

export type BookOrderByDto = {
  key: string;
  value: Prisma.SortOrder;
};
