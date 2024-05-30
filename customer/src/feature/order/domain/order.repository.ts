import ApiClient from "../../../core/network/remote/api_client";
import { Cart } from "../data/model/cart.class";
import { Customer } from "../data/model/customer.class";
import { Order } from "../data/model/order.type";
import { OrderLine } from "../data/model/order_line.type";
import { PaymentMethod } from "../data/model/payment_method.enum";
import { OrderRemoteDataSource } from "../data/order.remote_data_source";

export class OrderRepository {
  static createOrderRemote = async (
    cart: Cart,
    customer: Customer,
    paymentMethod: PaymentMethod
  ) => {
    return OrderRemoteDataSource.createOrder(cart, customer, paymentMethod);
  };
}
