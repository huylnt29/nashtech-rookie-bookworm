import { BookDetail } from "../../../book_detail/data/model/book_detail.type";
import { BookLine, Cart } from "../../data/model/cart.type";

interface CartState {
  cart: Cart;
  addBookLine(book: BookDetail, quantity: number): void;
  deleteBookLine(bookId: number): void;
  incrementBookByLine(bookId: number): void;
  decrementBookByLine(bookId: number): void;
}

export default CartState;
