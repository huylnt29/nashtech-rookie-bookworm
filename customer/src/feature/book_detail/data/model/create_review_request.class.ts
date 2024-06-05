export class CreateReviewRequest {
  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  copyWith = (obj: Object) => new CreateReviewRequest(Object.assign(this, obj));

  bookId?: string;
  author?: string;
  rating?: number;
  content?: string;

  validate = () => {
    return this.bookId && this.author && (this.rating || this.content);
  };

  toServerData = () => ({
    bookId: this.bookId,
    author: this.author,
    rating: this.rating,
    content: this.content,
  });
}

export type CreateReviewRequestProperty =
  | "bookId"
  | "author"
  | "rating"
  | "content";
