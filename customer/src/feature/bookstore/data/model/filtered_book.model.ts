import { PaginationMeta } from "../../../../core/data/type/pagination_meta.type";

export type BookPaginationResult = {
  data: FilteredBook[];
  meta: PaginationMeta;
};

export type FilteredBook = {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
  batches: Batch[];
};

export type Batch = {
  id: number;
  price: number;
  discount: Discount | null;
};

export type Discount = {
  percentage: number;
};
