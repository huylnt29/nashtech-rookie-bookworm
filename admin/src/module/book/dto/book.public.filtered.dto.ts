export type ReadPublicFilteredBookDto = {
  id: number;
  batchId: number;
  name: string;
  imageUrls: string[];
  description: string;
  publishedYear: number;
  totalSoldQuantity: number;
  averageRating: number;
  remainingQuantity: number;
  price: number;
};
