import BookstoreRemoteDataSource from "../data/bookstore.remote_data_source";
import { BookPaginationResult } from "../data/model/filtered_book.model";

class BookstoreRepository {
  static async fetchBookFilterMenuList(): Promise<any> {
    return BookstoreRemoteDataSource.fetchFilterDataForBooks();
  }
  static async filterBooks(): Promise<BookPaginationResult> {
    let res = await BookstoreRemoteDataSource.fetchFilteredBooks();
    res.data = res.data.filter((book) => book.batches.length > 0);
    return res;
  }
}

export default BookstoreRepository;
