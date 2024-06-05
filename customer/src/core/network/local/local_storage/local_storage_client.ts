import { Cart } from "../../../../feature/order/data/model/cart.class";
import { LocalStorageKey } from "./local_storage_key";

class LocalStorageClient {
  static setCart = (cart: Cart) => {
    return localStorage.setItem(LocalStorageKey.CART, JSON.stringify(cart));
  };
  static getCart = () => {
    return localStorage.getItem(LocalStorageKey.CART);
  };
  static removeCart = () => {
    localStorage.removeItem(LocalStorageKey.CART);
  };
}

export default LocalStorageClient;
