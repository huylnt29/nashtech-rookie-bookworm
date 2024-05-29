import { Flex, VStack } from "@chakra-ui/react";
import BookLineList from "./book_line.list";
import PriceCalculationBox from "./price_calculation.box";
import BuyerInformationForm from "./buyer_information.form";

const CartScreen = () => {
  return (
    <Flex marginX="15%" justify="space-between" gap="7%">
      <VStack width="55%" spacing={8}>
        <BookLineList />
      </VStack>
      <VStack width="45%" spacing={8}>
        <PriceCalculationBox />
        <BuyerInformationForm />
      </VStack>
    </Flex>
  );
};

export default CartScreen;
