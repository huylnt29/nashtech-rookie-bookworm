import RequestState from "../../../../core/data/enum/request_state.enum";
import { BookDetail } from "../../data/model/book_detail.type";
import {
  CreateReviewRequest,
  CreateReviewRequestProperty,
} from "../../data/model/create_review_request.class";

interface BookDetailState {
  getRequestState: RequestState;
  book?: BookDetail | null;
  review: CreateReviewRequest;
  createReviewError?: string | null;
  updateReview(property: CreateReviewRequestProperty, value: any): void;
  fetch: (id: string) => Promise<void>;
  submitReview: () => Promise<void>;
}

export default BookDetailState;
