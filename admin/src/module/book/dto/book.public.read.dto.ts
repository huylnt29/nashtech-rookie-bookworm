export type ReadPublicBookDto = {
  id: number;
  name: string;
  imageUrls: string[];
  description: string;
  publishedYear: number;
  totalSoldQuantity: number;
  averageRating: number;
  remainingQuantity: number;
  price: number;
  publisher: unknown;
  category: unknown;
  authors: unknown;
  discount: unknown;
  reviews: unknown;
};
