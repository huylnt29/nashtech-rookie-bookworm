import { useEffect } from "react";
import AppRouter from "./core/router/router";
import useOrderStore from "./feature/order/presentation/store/order.store";

const App = () => {
  const { saveCart, retrieveCart } = useOrderStore();

  const onAppStart = (event: any) => {
    event.preventDefault();
    retrieveCart();
  };

  const onAppClose = (event: any) => {
    event.preventDefault();
    saveCart();
  };

  useEffect(() => {
    window.addEventListener("load", onAppStart);
    window.addEventListener("beforeunload", onAppClose);

    return () => {
      window.removeEventListener("load", onAppStart);
      window.removeEventListener("beforeunload", onAppClose);
    };
  }, []);

  return <AppRouter />;
};

export default App;
