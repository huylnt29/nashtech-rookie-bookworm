import BookstoreRemoteDataSource from "../data/bookstore.remote_data_source";
import { Author } from "../data/model/author.model";
import { Category } from "../data/model/category.model";
import { BookPaginationResult } from "../data/model/filtered_book.model";

class BookstoreRepository {
  static async fetchBookFilterMenu(): Promise<any> {
    return BookstoreRemoteDataSource.fetchCategoriesAndAuthors();
  }
  static async filterBooks(
    categories: Category[],
    authors: Author[]
  ): Promise<BookPaginationResult> {
    return BookstoreRemoteDataSource.fetchFilteredBooks(categories, authors);
  }
}

export default BookstoreRepository;
