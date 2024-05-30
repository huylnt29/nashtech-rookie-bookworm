export interface PageResult<T> {
  data: Array<T>;
  meta: {
    totalItems: number;
    page: number;
    totalPages: number;
  };
}
