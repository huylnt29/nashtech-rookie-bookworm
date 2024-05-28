import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Spacer,
} from "@nextui-org/react";
import Logo from "./logo";
import { Button, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import AppInput from "./input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Color from "../theme/theme";
import SecondaryButton from "./secondary_button";

export default function AppNavbar() {
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
            label="Search for books"
            value={undefined}
            placeholder="Type book name here"
            leftIcon={<MagnifyingGlassIcon className="text-white" />}
            textColor={Color.primary}
          />
        </NavbarItem>
        <Spacer x={12} />
        <NavbarItem>
          <Link color="primary" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/store">
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <SecondaryButton
            text="Cart"
            onClick={undefined}
            colorScheme="gray"
            leftIcon={<CiShoppingCart />}
            color={"secondary"}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
