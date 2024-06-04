import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Spacer,
} from "@nextui-org/react";
import Logo from "./logo";
import { Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import AppInput from "./input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Color from "../theme/theme";
import SecondaryButton from "./secondary_button";
import { RouteBuilder, RoutePath } from "../router/route_path";
import useOrderStore from "../../feature/order/presentation/store/order.store";
import { useNavigate } from "react-router";
import { FilterBookRequest } from "../../feature/bookstore/data/model/filter_book_request.class";

export default function AppNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar className="bg-transparent p-3">
      <NavbarBrand>
        <Logo />
        <Spacer x={4} />
        <Text color="white" fontWeight="bold">
          BookWorm
        </Text>
      </NavbarBrand>

      <NavbarContent className="flex gap-12" justify="center">
        <NavbarItem>
          <AppInput
            type="text"
            value={undefined}
            placeholder="Search for books"
            leftIcon={<MagnifyingGlassIcon className="text-white font-bold" />}
            textColor={Color.primary}
            focusBorderColor={"white"}
          />
        </NavbarItem>
        <Spacer x={12} />
        <NavbarItem>
          <Link
            color="primary"
            onClick={() => navigate(RoutePath.HOME)}
            className="cursor-pointer"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="primary"
            onClick={() =>
              navigate(
                RouteBuilder.buildStorePath(new FilterBookRequest({ page: 1 }))
              )
            }
            className="cursor-pointer"
          >
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#" className="cursor-pointer">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NavbarCart />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

const NavbarCart = () => {
  const { cart } = useOrderStore();
  const navigate = useNavigate();

  const buildText = () => {
    if (!cart?.booksCount || cart?.booksCount == 0) return "Cart";
    else return `Cart (${cart.booksCount})`;
  };

  return (
    <SecondaryButton
      text={buildText()}
      onClick={() => navigate(RoutePath.CHECK_OUT)}
      leftIcon={<CiShoppingCart className="text-white font-bold" />}
      color={"secondary"}
    />
  );
};
