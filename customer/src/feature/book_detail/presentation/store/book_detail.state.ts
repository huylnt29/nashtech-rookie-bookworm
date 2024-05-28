import RequestState from "../../../../core/data/enum/request_state.enum";
import { BookDetail } from "../../data/model/book_detail.type";

interface BookDetailState {
  requestState: RequestState;
  book?: BookDetail | null;
  fetch: (id: string) => Promise<void>;
}

export default BookDetailState;
