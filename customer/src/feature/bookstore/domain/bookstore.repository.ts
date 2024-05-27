import BookstoreRemoteDataSource from "../data/bookstore.remote_data_source";

class BookstoreRepository {
  static async fetchBookFilterMenuList(): Promise<any> {
    return BookstoreRemoteDataSource.fetchFilterDataForBooks();
  }
  static async filterBooks(): Promise<any> {
    return BookstoreRemoteDataSource.fetchFilteredBooks();
  }
}

export default BookstoreRepository;
