import { Author } from "../../../../core/data/type/author.type";
import { Category } from "../../../../core/data/type/category.type";

export type BookDetail = {
  id: number;
  imageUrls: string[];
  name: string;
  description: string;
  publishedYear: number;
  totalSoldQuantity: number;
  averageRating: number;
  category: Category;
  publisher: Publisher;
  authors: Author[];
  batches: Batch[];
  reviews: Review[];
};

export type Publisher = {
  id: number;
  name: string;
};

export type Batch = {
  id: number;
  price: number;
  initialQuantity: number;
  soldQuantity: number;
  discount?: Discount;
};

export type Review = {
  id: number;
  author: string;
  rating: number;
  content: string;
  updatedAt: Date;
};

export type Discount = {
  id: number;
  percentage: number;
  minQuantity: number;
  maxQuantity: string;
};
