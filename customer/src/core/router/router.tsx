import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./route_path";
import HomeScreen from "../../feature/home/presentation/home.screen";
import ViewBookstoreScreen from "../../feature/bookstore/presentation/view_bookstore.screen";
import GlobalLayout from "../component/global_layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={
        <GlobalLayout>
          <HomeScreen />
        </GlobalLayout>
      } />
      <Route path={RoutePath.STORE} element={
        <GlobalLayout>
          <ViewBookstoreScreen />
        </GlobalLayout>
      } />
    </Routes>
  );
};

export default AppRouter;
