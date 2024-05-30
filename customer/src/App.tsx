import { useEffect } from "react";
import AppRouter from "./core/router/router";
import useOrderStore from "./feature/order/presentation/store/order.store";

const App = () => {
  const { saveCart } = useOrderStore();

  const onAppClose = (event: any) => {
    event.preventDefault();
    saveCart();
    return null;
  };
  useEffect(() => {
    window.addEventListener("beforeunload", onAppClose);

    return () => {
      window.removeEventListener("beforeunload", onAppClose);
    };
  }, []);

  return <AppRouter />;
};

export default App;
