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
    return (await ApiClient.postGraphQL(query)).data;
  }
  static async fetchFilteredBooks(): Promise<FilteredBook[]> {
    const query = `
      query {
        books {
          data {
            id
            name
            imageUrls
            totalSoldQuantity
            averageRating
          }
          meta {
            page
            totalItems
            totalPages
          }
        }
      }
    `;
    return (await ApiClient.postGraphQL(query)).data.books.data;
  }
}

export default BookstoreRemoteDataSource;
