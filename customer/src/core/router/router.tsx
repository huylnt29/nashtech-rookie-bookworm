import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./route_path";
import HomeScreen from "../../feature/home/presentation/home.screen";
import ViewBookstoreScreen from "../../feature/bookstore/presentation/view_bookstore.screen";
import GlobalLayout from "../component/global_layout";
import BookDetailScreen from "../../feature/book_detail/presentation/book_detail.screen";
import CartScreen from "../../feature/cart/presentation/cart.screen";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={RoutePath.HOME}
        element={
          <GlobalLayout>
            <HomeScreen />
          </GlobalLayout>
        }
      />
      <Route
        path={RoutePath.STORE}
        element={
          <GlobalLayout>
            <ViewBookstoreScreen />
          </GlobalLayout>
        }
      />
      <Route
        path={RoutePath.BOOK}
        element={
          <GlobalLayout>
            <BookDetailScreen />
          </GlobalLayout>
        }
      />
      <Route
        path={RoutePath.CHECK_OUT}
        element={
          <GlobalLayout>
            <CartScreen />
          </GlobalLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
