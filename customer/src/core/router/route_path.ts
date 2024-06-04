import { FilterBookRequest } from "../../feature/bookstore/data/model/filter_book_request.class";

export const RoutePath = {
  HOME: "/",
  STORE: "/store",
  BOOK: "/book/:id",
  CHECK_OUT: "/check-out",
};

export const RouteBuilder = {
  buildStorePath: (filterBookRequest: FilterBookRequest) =>
    `/store?categoryIds=${filterBookRequest.categoryIds?.toString()}&authorIds=${filterBookRequest.authorIds?.toString()}&rating=${
      filterBookRequest.rating
    }&sortBy=${filterBookRequest.sortBy}&sortDirection=${
      filterBookRequest.sortDirection
    }&page=${filterBookRequest.page}`,
  buildBookPath: (id: number) => `/book/${id}`,
};
