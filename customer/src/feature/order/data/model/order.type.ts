import { Customer } from "./customer.class";
import { OrderLine } from "./order_line.type";
import { PaymentMethod } from "./payment_method.enum";

export type Order = {
  totalQuantity?: number;
  totalPrice?: number;
  lines: OrderLine[];
  customer: Customer;
  paymentMethod: PaymentMethod;
};
