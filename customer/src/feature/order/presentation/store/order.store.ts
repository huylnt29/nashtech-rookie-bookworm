import { create } from "zustand";
import { Cart } from "../../data/model/cart.class";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";
import { BookLine } from "../../data/model/book_line.class";
import { Customer } from "../../data/model/customer.class";
import { PaymentMethod } from "../../data/model/payment_method.enum";
import OrderState from "./order.state";
import RequestState from "../../../../core/data/enum/request_state.enum";
import { OrderRepository } from "../../domain/order.repository";

const useOrderStore = create<OrderState>()((set, get) => {
  return {
    cart: new Cart(),
    customer: new Customer(),
    paymentMethod: PaymentMethod.CASH,
    submitRequestState: RequestState.IDLE,
    addBookLine(book: BookDetail, quantity: number) {
      set((state) => {
        if (state.cart) {
          return {
            cart: state.cart.addLine(
              new BookLine({
                book,
                quantity,
              })
            ),
          };
        } else
          return {
            cart: new Cart().addLine(
              new BookLine({
                book,
                quantity,
              })
            ),
          };
      });
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
    async submit() {
      set(() => ({
        submitRequestState: RequestState.LOADING,
      }));
      const res = await OrderRepository.createOrderRemote(
        get().cart,
        get().customer,
        get().paymentMethod
      );

      set(() => ({
        submitRequestState: RequestState.LOADED,
      }));
      get().finishOrder();
    },
    saveCart() {
      OrderRepository.saveCartLocal(get().cart);
    },
    finishOrder() {
      set(() => ({
        cart: new Cart(),
      }));
      OrderRepository.removeCartLocal();
    },
    retrieveCart() {
      const cart = OrderRepository.getCartLocal();
      set(() => ({
        cart: cart,
      }));
    },
  };
});

export default useOrderStore;
