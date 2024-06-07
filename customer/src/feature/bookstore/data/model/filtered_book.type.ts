import { PaginationMeta } from "../../../../core/data/type/pagination_meta.type";

export type BookPaginationResult = {
  data: FilteredBatch[];
  meta: PaginationMeta;
};

export type FilteredBatch = {
  id: number;
  index: number;
  price: number;
  importedAt: string;
  book: FilteredBatchBook;
  discount: Discount | null;
};

export type FilteredBatchBook = {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
};

export type Discount = {
  id: number;
  percentage: number;
};
