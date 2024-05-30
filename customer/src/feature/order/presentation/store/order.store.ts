import { create } from "zustand";
import CartState from "./cart.state";
import { Cart } from "../../data/model/cart.class";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";
import { BookLine } from "../../data/model/book_line.class";
import { Customer } from "../../data/model/customer.class";
import { PaymentMethod } from "../../data/model/payment_method.enum";

const useOrderStore = create<CartState>()((set, get) => {
  return {
    cart: new Cart(),
    customer: new Customer(),
    paymentMethod: PaymentMethod.CASH,
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

export default useOrderStore;
