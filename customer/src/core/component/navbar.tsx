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
          <Button leftIcon={<CiShoppingCart />}>Cart</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
