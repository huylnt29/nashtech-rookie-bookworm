export interface Batch {
  id: number;
  index: number;
  price: number;
  book: FilteredBook;
  discount: Discount | null;
}

export interface FilteredBook {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
}

export interface Discount {
  id: number;
  percentage: number;
}
