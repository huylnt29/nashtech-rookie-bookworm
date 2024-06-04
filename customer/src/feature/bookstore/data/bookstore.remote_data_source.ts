import ApiClient from "../../../core/network/remote/api_client";
import { Author } from "../../../core/data/type/author.type";
import { Category } from "../../../core/data/type/category.type";
import { BookPaginationResult } from "./model/filtered_book.type";
import { FilterBookRequest } from "./model/filter_book_request.class";

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
    filterBookRequest: FilterBookRequest
  ): Promise<BookPaginationResult> {
    return (await ApiClient.postGraphQL(filterBookRequest.toGraphQLQuery()))
      .data.books;
  }
}

export default BookstoreRemoteDataSource;
