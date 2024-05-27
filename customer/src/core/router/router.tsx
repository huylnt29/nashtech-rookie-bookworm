import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./route_path";
import HomeScreen from "../../feature/home/presentation/home.screen";
import StoreScreen from "../../feature/store/presentation/store.screen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<HomeScreen />} />
      <Route path={RoutePath.STORE} element={<StoreScreen />} />
    </Routes>
  );
};

export default AppRouter;
