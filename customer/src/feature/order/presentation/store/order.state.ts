import RequestState from "../../../../core/data/enum/request_state.enum";
import { BookDetail } from "../../../book_detail/data/model/book_detail.type";
import { Cart } from "../../data/model/cart.class";
import { Customer, CustomerProperty } from "../../data/model/customer.class";
import { PaymentMethod } from "../../data/model/payment_method.enum";

interface OrderState {
  cart: Cart;
  customer: Customer;
  paymentMethod: PaymentMethod;
  addBookLine(book: BookDetail, quantity: number): void;
  deleteBookLine(bookId: number): void;
  incrementBookByLine(bookId: number): void;
  decrementBookByLine(bookId: number): void;
  calculatePrice(): void;
  selectPaymentMethod(paymentMethod: PaymentMethod): void;
  updateCustomer(property: CustomerProperty, value: string): void;
  submit(): void;
  submitRequestState: RequestState;
}

export default OrderState;
