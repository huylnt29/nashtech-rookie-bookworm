import ApiClient from "../../../core/network/remote/api_client";

class BookstoreRemoteDataSource {
  static async fetchFilterDataForBooks(): Promise<any> {
    const query = `
      query {
        categories {
          id
          name
        }
        authors {
          id
          name
        }
      }
    `;
    return ApiClient.postGraphQL(query);
  }
}

export default BookstoreRemoteDataSource;
