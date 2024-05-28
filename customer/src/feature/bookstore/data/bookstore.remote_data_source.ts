import ApiClient from "../../../core/network/remote/api_client";
import { BookPaginationResult } from "./model/filtered_book.model";

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
  static async fetchFilteredBooks(): Promise<BookPaginationResult> {
    const query = `
      query {
        books {
          data {
            id
            imageUrls
            name
            totalSoldQuantity
            averageRating
            batches {
              id 
              price
              discount {
                percentage
              }
            }
          }
          meta {
            page
            totalItems
            totalPages
          }
        }
      }
    `;
    return (await ApiClient.postGraphQL(query)).data.books;
  }
}

export default BookstoreRemoteDataSource;
