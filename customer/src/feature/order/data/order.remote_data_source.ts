import ApiClient from "../../../core/network/remote/api_client";
import { Cart } from "./model/cart.class";
import { Customer } from "./model/customer.class";
import { Order } from "./model/order.type";
import { OrderLine } from "./model/order_line.type";
import { PaymentMethod } from "./model/payment_method.enum";

export class OrderRemoteDataSource {
  static createOrder = async (
    cart: Cart,
    customer: Customer,
    paymentMethod: PaymentMethod
  ) => {
    const order: Order = {
      lines: cart.lines!.map((bookLine) => {
        const orderLine: OrderLine = {
          batchId: 0,
          quantity: bookLine.quantity!,
          price: Math.round(
            bookLine.book!.price * bookLine.book!.discount.percentage
          ),
        };
        return orderLine;
      }),
      customer: customer,
      paymentMethod: paymentMethod,
    };
    return ApiClient.postOrder(order);
  };
}
