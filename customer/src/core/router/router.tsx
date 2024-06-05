import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./route_path";
import GlobalLayout from "../component/global_layout";
import HomeScreen from "../../feature/home/presentation/home.screen";
import BookstoreScreen from "../../feature/bookstore/presentation/bookstore.screen";
import BookDetailScreen from "../../feature/book_detail/presentation/book_detail.screen";
import CartScreen from "../../feature/order/presentation/order.screen";
import AboutScreen from "../../feature/about/about.screen";

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
            <BookstoreScreen />
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
      <Route
        path={RoutePath.ABOUT}
        element={
          <GlobalLayout padding={0}>
            <AboutScreen />
          </GlobalLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
