import { Cart } from "../data/model/cart.class";
import { Customer } from "../data/model/customer.class";
import { PaymentMethod } from "../data/model/payment_method.enum";
import { OrderLocalDataSource } from "../data/order.local_data_source";
import { OrderRemoteDataSource } from "../data/order.remote_data_source";

export class OrderRepository {
  static createOrderRemote = async (
    cart: Cart,
    customer: Customer,
    paymentMethod: PaymentMethod
  ): Promise<any> => {
    return OrderRemoteDataSource.createOrder(cart, customer, paymentMethod);
  };
  static saveCartLocal = (cart: Cart) => {
    return OrderLocalDataSource.save(cart);
  };
  static removeCartLocal = () => {
    return OrderLocalDataSource.remove();
  };
  static getCartLocal = (): Cart | undefined => {
    const cart = OrderLocalDataSource.retrieve();
    OrderLocalDataSource.remove();
    return cart;
  };
}
