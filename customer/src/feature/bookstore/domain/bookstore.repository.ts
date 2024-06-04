import BookstoreRemoteDataSource from "../data/bookstore.remote_data_source";
import { BookPaginationResult } from "../data/model/filtered_book.type";
import { FilterBookRequest } from "../data/model/filter_book_request.class";

class BookstoreRepository {
  static async fetchBookFilterMenu(): Promise<any> {
    return BookstoreRemoteDataSource.fetchCategoriesAndAuthors();
  }
  static async filterBooks(
    filterBookRequest: FilterBookRequest
  ): Promise<BookPaginationResult> {
    return BookstoreRemoteDataSource.fetchFilteredBooks(filterBookRequest);
  }
}

export default BookstoreRepository;
