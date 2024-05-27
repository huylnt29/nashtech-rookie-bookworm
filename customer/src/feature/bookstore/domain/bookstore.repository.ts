import BookstoreRemoteDataSource from "../data/bookstore.remote_data_source";

class BookstoreRepository {
  static async fetchFilterDataForBooks(): Promise<any> {
    return BookstoreRemoteDataSource.fetchFilterDataForBooks();
  }
}

export default BookstoreRepository;
