import ApiClient from "../../../core/network/remote/api_client";
import { FilteredBook } from "./model/filtered_book.model";

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
        batches(where: {
          state: ACTIVE
        }) {
          id
          index 
          price
          book {
            id
            imageUrls
            name
            totalSoldQuantity
            averageRating
          }
          discount {
            id
            percentage
          }
        }
      }
    `;
    return (await ApiClient.postGraphQL(query)).data.batches;
  }
}

export default BookstoreRemoteDataSource;
