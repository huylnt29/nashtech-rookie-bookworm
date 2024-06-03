import BookDetailRemoteDataSourcce from "../data/book_detail.remote_data_source";
import { BookDetail } from "../data/model/book_detail.type";
import { CreateReviewRequest } from "../data/model/create_review_request.class";

class BookDetailRepository {
  static async get(id: string): Promise<BookDetail> {
    return BookDetailRemoteDataSourcce.get(id);
  }
  static async postReview(review: CreateReviewRequest): Promise<any> {
    return BookDetailRemoteDataSourcce.postReview(review);
  }
}

export default BookDetailRepository;
