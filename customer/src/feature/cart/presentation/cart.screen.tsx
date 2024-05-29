import { Box, Flex, VStack } from "@chakra-ui/react";
import BookLineList from "./book_line.list";
import { Spacer } from "@nextui-org/react";
import PriceCalculationBox from "./price_calculation.box";

const CartScreen = () => {
  return (
    <Flex marginX="15%" justify="space-between" gap="7%">
      <VStack width="70%" spacing={8}>
        <BookLineList />
        <Spacer y={16} />
      </VStack>
      <Box width="30%">
        <PriceCalculationBox />
      </Box>
    </Flex>
  );
};

export default CartScreen;
