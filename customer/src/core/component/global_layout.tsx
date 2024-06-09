import { Box, Flex } from "@chakra-ui/react";
import AppNavbar from "./navbar";
import Color from "../theme/theme";

const GlobalLayout = ({ children, padding }: any) => {
  return (
    <Flex width="100vw" height="100vh" direction="column" justify="start">
      <Box height="12%">
        <AppNavbar />
      </Box>
      <Box
        height="88%"
        backgroundColor={Color.primary}
        padding={padding ?? "18px 0"}
        className="overflow-y-auto"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default GlobalLayout;
