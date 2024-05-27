import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Spacer} from "@nextui-org/react";
import Logo from "./logo";
import { Text } from "@chakra-ui/react";

export default function AppNavbar() {
  return (
    <Navbar className="bg-transparent p-8">
      <NavbarBrand >
        <Logo />
        <Spacer x={4} />
        <Text color='white' fontWeight='bold'>BookWorm</Text>
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
          <Button as={Link} color="primary" href="#" variant="bordered">
            Cart
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
