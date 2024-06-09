import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Spacer,
} from "@nextui-org/react";
import Logo from "./logo";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CiShop, CiShoppingCart, CiSquareInfo } from "react-icons/ci";
import AppInput from "./input";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Color from "../theme/theme";
import SecondaryButton from "./secondary_button";
import { RouteBuilder, RoutePath } from "../router/route_path";
import useOrderStore from "../../feature/order/presentation/store/order.store";
import { useNavigate } from "react-router";
import { FilterBookRequest } from "../../feature/bookstore/data/model/filter_book_request.class";
import { SortDirection } from "../data/enum/sort_direction.enum";
import useBookstoreStore from "../../feature/bookstore/presentation/store/bookstore.store";
import { useState } from "react";

const AppNavbar = () => {
  const { updateFilterRequest, filterRequest } = useBookstoreStore();
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);

  return (
    <Flex className="w-full justify-between items-center bg-slate-800 py-3 px-[15vw] overflow-x-hidden overflow-y-hidden">
      <Flex align="center">
        <Box onClick={() => setDrawer(!drawer)}>
          <Logo />
        </Box>
        <Spacer x={4} />
        <Text color="white" fontWeight="bold" className="hidden md:block">
          BookWorm
        </Text>
      </Flex>
      {drawer && <NavDrawer toggleDrawer={() => setDrawer(!drawer)} />}
      <Flex className="flex gap-12" justify="center" align="center">
        <AppInput
          type="text"
          value={undefined}
          placeholder="Search for books"
          leftIcon={<MagnifyingGlassIcon className="text-white font-bold" />}
          textColor={Color.primary}
          focusBorderColor={"white"}
          onChange={(event) =>
            updateFilterRequest("search", event.target.value)
          }
          onEnter={() =>
            location.assign(RouteBuilder.buildStorePath(filterRequest))
          }
          width="25vw"
        />
        <Link
          color="primary"
          onClick={() => navigate(RoutePath.HOME)}
          className="cursor-pointer hidden md:block"
        >
          Home
        </Link>
        <Link
          color="primary"
          onClick={() =>
            location.assign(
              RouteBuilder.buildStorePath(
                new FilterBookRequest({
                  page: 1,
                  sortDirection: SortDirection.ASC,
                })
              )
            )
          }
          className="cursor-pointer hidden md:block"
        >
          Store
        </Link>
        <Link
          color="primary"
          onClick={() => navigate(RoutePath.ABOUT)}
          className="cursor-pointer hidden md:block"
        >
          About
        </Link>
        <NavbarCart />
      </Flex>
    </Flex>
  );
};

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

const NavDrawer = ({ toggleDrawer }: any) => {
  const navigate = useNavigate();
  return (
    <Drawer isOpen placement="left" onClose={toggleDrawer}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="#00072c">
        <DrawerCloseButton color="white" />
        <DrawerHeader>
          <Flex align="center">
            <Logo />
            <Spacer x={4} />
            <Text color="white" fontWeight="bold" className="hidden md:block">
              BookWorm
            </Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <VStack align="start" spacing={5}>
            <Flex
              gap={3}
              onClick={() => {
                toggleDrawer();
                navigate(RoutePath.HOME);
              }}
            >
              <HomeIcon className="text-slate-50 w-6 h-6" />
              <Text color="white">Home</Text>
            </Flex>
            <Flex
              gap={3}
              onClick={() => {
                toggleDrawer();
                location.assign(
                  RouteBuilder.buildStorePath(
                    new FilterBookRequest({
                      page: 1,
                      sortDirection: SortDirection.ASC,
                    })
                  )
                );
              }}
            >
              <CiShop className="text-slate-50 w-6 h-6" />
              <Text color="white">Store</Text>
            </Flex>
            <Flex
              gap={3}
              onClick={() => {
                toggleDrawer();
                navigate(RoutePath.ABOUT);
              }}
            >
              <CiSquareInfo className="text-slate-50 w-6 h-6" />
              <Text color="white">About</Text>
            </Flex>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AppNavbar;
