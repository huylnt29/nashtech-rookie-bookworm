export type CollectionBatch = {
  id: number;
  price: number;
  initialQuantity: number;
  soldQuantity: number;
  discount: Discount | null;
  book: CollectionBook;
};

export type CollectionBook = {
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
  id: number;
};

export type Discount = {
  percentage: number;
};
