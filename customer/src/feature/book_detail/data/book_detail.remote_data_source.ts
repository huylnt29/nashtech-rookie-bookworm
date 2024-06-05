import ApiClient from "../../../core/network/remote/api_client";
import { BookDetail } from "./model/book_detail.type";
import { CreateReviewRequest } from "./model/create_review_request.class";

class BookDetailRemoteDataSourcce {
  static async get(id: string): Promise<BookDetail> {
    const res = await ApiClient.getBookDetail(id);
    return res as unknown as BookDetail;
  }
  static async postReview(review: CreateReviewRequest): Promise<any> {
    const res = await ApiClient.postReview(review);
    return res;
  }
}

export default BookDetailRemoteDataSourcce;
