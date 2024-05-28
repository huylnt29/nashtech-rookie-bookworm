import ApiClient from "../../../core/network/remote/api_client";
import { BookDetail } from "./model/book_detail.type";

class BookDetailRemoteDataSourcce {
  static async getDetail(id: string): Promise<BookDetail> {
    const query = `
      query {
        book(where: {
          id: ${id}
        }) {
          id
          imageUrls
          name
          description
          publishedYear
          totalSoldQuantity
          averageRating
          category {
            id
            name
          }
          publisher {
            id
            name
          }
          authors {
            id
            name
          }
          batches {
            id
            initialQuantity
            soldQuantity
            discount {
              id
              percentage
              minQuantity
              maxQuantity
            }
          }
          reviews {
            id
            author
            rating
            content
          }
        }
      }
    `;
    return (await ApiClient.postGraphQL(query)).data.book;
  }
}

export default BookDetailRemoteDataSourcce;
