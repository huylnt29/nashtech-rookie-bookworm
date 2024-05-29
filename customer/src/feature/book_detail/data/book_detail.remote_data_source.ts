import ApiClient from "../../../core/network/remote/api_client";
import { BookDetail } from "./model/book_detail.type";

class BookDetailRemoteDataSourcce {
  static async getDetail(id: string): Promise<BookDetail> {
    const res = await ApiClient.getBookDetail(id);
    return res as unknown as BookDetail;
  }
}

export default BookDetailRemoteDataSourcce;
