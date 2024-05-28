import { SortDirection } from "../data/enum/sort_direction.enum";

export const RoutePath = {
  HOME: "/",
  STORE: "/store",
};

export const RouteBuilder = {
  buildStorePath: (
    page: number,
    categoryIds?: number[],
    authorIds?: number[],
    sortBy?: string,
    sortDirection?: SortDirection
  ) =>
    `/store?categoryIds=${categoryIds?.toString()}&authorIds=${authorIds?.toString()}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}`,
};
