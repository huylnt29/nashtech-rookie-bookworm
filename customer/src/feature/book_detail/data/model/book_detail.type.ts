import { Author } from "../../../../core/data/type/author.type";
import { Category } from "../../../../core/data/type/category.type";

export type BookDetail = {
  id: number;
  name: string;
  imageUrls: string[];
  description: string;
  publishedYear: number;
  totalSoldQuantity: number;
  averageRating: number;
  remainingQuantity: number;
  price: number;
  publisher: Publisher;
  category: Category;
  authors: Author[];
  discount: Discount;
  reviews: Review[];
};

export type Publisher = {
  id: number;
  name: string;
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
  endAt: Date;
};
