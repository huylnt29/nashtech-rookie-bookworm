import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import useCartStore from "./store/cart.store";
import { UI } from "../../../core/util/ui.util";
import RowText from "../../../core/component/row_text";
import { Divider } from "@nextui-org/react";

const PriceCalculationBox = () => {
  const { cart } = useCartStore();

  return (
    <VStack align="start">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Order price
        </Text>
      </HStack>
      <AppContainer width="100%">
        <VStack align="start">
          <RowText
            leftText="BOOKS COUNT"
            rightText={UI.formatNumberWithDots(cart.booksCount!)}
          />
          <RowText
            leftText="SUBTOTAL"
            rightText={`${UI.formatNumberWithDots(cart.subtotal!)} VND`}
          />
          <RowText
            leftText="DISCOUNTED"
            rightText={`${UI.formatNumberWithDots(cart.discounted!)} VND`}
          />
          <Divider />
          <RowText
            leftText="FINAL"
            rightText={`${UI.formatNumberWithDots(cart.final!)} VND`}
          />
        </VStack>
      </AppContainer>
    </VStack>
  );
};

export default PriceCalculationBox;
