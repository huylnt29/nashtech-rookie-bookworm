import { Box, Flex } from "@chakra-ui/react";
import AppNavbar from "./navbar";
import { PropsWithChildren } from "react";
import Color from "../theme/theme";

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      backgroundColor={Color.secondary}
    >
      <AppNavbar />
      <Box
        flexGrow={1}
        backgroundColor={Color.primary}
        p={12}
        className="rounded-xl"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default GlobalLayout;
