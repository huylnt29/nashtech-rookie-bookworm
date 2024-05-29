import { create } from "zustand";
import CartState from "./cart.state";
import { Cart } from "../../data/model/cart.type";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";

const useCartStore = create<CartState>()((set, get) => {
  return {
    cart: new Cart(),
    addBookLine(book: BookDetail, quantity: number) {
      set((state) => ({
        cart: state.cart.addLine({
          book,
          quantity,
        }),
      }));
    },
    deleteBookLine(bookId: number) {},
    incrementBookByLine(bookId) {},
    decrementBookByLine(bookId) {},
  };
});

export default useCartStore;
