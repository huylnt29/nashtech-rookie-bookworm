import { Box, Flex } from "@chakra-ui/react";
import FilterMenu from "./filter_menu.box";
import FilterResultGrid from "./filter_result.grid";

const ViewBookstoreScreen = () => {
  return (
    <Flex justify="center" mx="10%" gap={8}>
      <Box width="30%">
        <FilterMenu />
      </Box>
      <Box width="70%">
        <FilterResultGrid />
      </Box>
    </Flex>
  );
};

export default ViewBookstoreScreen;
