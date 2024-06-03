import ApiClient from "../../../core/network/remote/api_client";
import { Author } from "../../../core/data/type/author.type";
import { Category } from "../../../core/data/type/category.type";
import { BookPaginationResult } from "./model/filtered_book.type";

class BookstoreRemoteDataSource {
  static async fetchCategoriesAndAuthors(): Promise<any> {
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
  static async fetchFilteredBooks(
    categories: Category[],
    authors: Author[]
  ): Promise<BookPaginationResult> {
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
