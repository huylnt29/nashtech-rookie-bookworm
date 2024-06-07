import { BookDetail } from "../data/model/book_detail.type";
import { CreateReviewRequest } from "../data/model/create_review_request.class";
import BookDetailRemoteDataSourcce from "../data/remote_data_source/book_detail.remote_data_source";

class BookDetailRepository {
  static async get(id: string): Promise<BookDetail> {
    return BookDetailRemoteDataSourcce.get(id);
  }
  static async postReview(review: CreateReviewRequest): Promise<any> {
    return BookDetailRemoteDataSourcce.postReview(review);
  }
}

export default BookDetailRepository;
