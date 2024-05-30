import { create } from "zustand";
import { Cart } from "../../data/model/cart.class";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";
import { BookLine } from "../../data/model/book_line.class";
import { Customer } from "../../data/model/customer.class";
import { PaymentMethod } from "../../data/model/payment_method.enum";
import OrderState from "./order.state";

const useOrderStore = create<OrderState>()((set, get) => {
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
    selectPaymentMethod(paymentMethod) {
      set(() => ({
        paymentMethod: paymentMethod,
      }));
    },
    updateCustomer(property, value) {
      set((state) => ({
        customer: state.customer.copyWith({
          [property]: value,
        }),
      }));
    },
    submit() {
      console.log(get().customer);
    },
  };
});

export default useOrderStore;
