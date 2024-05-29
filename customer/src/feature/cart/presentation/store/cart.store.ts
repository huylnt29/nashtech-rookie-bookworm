import { create } from "zustand";
import CartState from "./cart.state";
import { BookLine, Cart } from "../../data/model/cart.class";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";

const useCartStore = create<CartState>()((set, get) => {
  return {
    cart: new Cart(),
    addBookLine(book: BookDetail, quantity: number) {
      set((state) => ({
        cart: state.cart.addLine(
          new BookLine({
            book,
            quantity,
          })
        ),
      }));
      get().calculatePrice();
    },
    deleteBookLine(bookId: number) {},
    incrementBookByLine(bookId) {},
    decrementBookByLine(bookId) {},
    calculatePrice() {
      set((state) => ({
        cart: state.cart.setPrice(),
      }));
    },
  };
});

export default useCartStore;
