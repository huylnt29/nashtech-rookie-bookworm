export type BookPaginationResult = {
  data: FilteredBook[];
  meta: Meta;
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

export type Meta = {
  page: number;
  totalItems: number;
  totalPages: number;
};
