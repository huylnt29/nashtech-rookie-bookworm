import { Box, HStack, VStack, Text, Grid } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import AppContainer from "../../../core/component/container";
import useCartStore from "./store/cart.store";

const PaymentMethodBox = () => {
  const { cart } = useCartStore();

  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Payment method
        </Text>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <PaymentMethodItem imagePath="/payment_method_cash.png" text="Cash" />
        <PaymentMethodItem
          imagePath="/payment_method_zalopay.png"
          text="Zalo Pay"
        />
        <PaymentMethodItem
          imagePath="/payment_method_vnpay.webp"
          text="VN Pay"
        />
      </Grid>
    </VStack>
  );
};

const PaymentMethodItem = ({ imagePath, text }: any) => {
  return (
    <AppContainer>
      <VStack marginX={4}>
        <Image
          src={imagePath}
          className="w-12 h-12 object-cover object-center"
        />
        <Text fontWeight="bold">{text}</Text>
      </VStack>
    </AppContainer>
  );
};

export default PaymentMethodBox;
