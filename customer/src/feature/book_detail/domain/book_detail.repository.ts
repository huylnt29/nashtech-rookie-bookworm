import BookDetailRemoteDataSourcce from "../data/book_detail.remote_data_source";
import { BookDetail } from "../data/model/book_detail.type";

class BookDetailRepository {
  static async fetchBook(id: string): Promise<BookDetail> {
    return BookDetailRemoteDataSourcce.getDetail(id);
  }
}

export default BookDetailRepository;
