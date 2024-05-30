import LocalStorageClient from "../../../core/network/local/local_storage/local_storage_client";
import { BookLine } from "./model/book_line.class";
import { Cart } from "./model/cart.class";

export class OrderLocalDataSource {
  static save = (cart: Cart) => {
    return LocalStorageClient.setCart(cart);
  };
  static retrieve = (): Cart | undefined => {
    const raw = LocalStorageClient.getCart();
    if (!raw) return undefined;
    const cart = new Cart(JSON.parse(raw ?? ""));
    cart.lines = cart.lines?.map((line) => new BookLine(line));
    return cart;
  };
  static remove = () => {
    LocalStorageClient.removeCart();
  };
}
