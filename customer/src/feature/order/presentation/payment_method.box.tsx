import { Box, HStack, VStack, Text, Grid } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import AppContainer, {
  ContainerState,
} from "../../../core/component/container";
import useOrderStore from "./store/order.store";
import { PaymentMethod } from "../data/model/payment_method.enum";

const PaymentMethodBox = () => {
  const { cart } = useOrderStore();

  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Payment method
        </Text>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <PaymentMethodItem
          _paymentMethod={PaymentMethod.CASH}
          imagePath="/payment_method_cash.png"
          text="Cash"
          description="Settle your bill at the doorstep"
        />
        <PaymentMethodItem
          _paymentMethod={PaymentMethod.ZALOPAY}
          imagePath="/payment_method_zalopay.png"
          text="Zalo Pay"
          description="Have your phone with Zalo Pay ready"
        />
        <PaymentMethodItem
          _paymentMethod={PaymentMethod.VNPAY}
          imagePath="/payment_method_vnpay.webp"
          text="VN Pay"
          description="Have your phone with VN Pay ready"
        />
      </Grid>
    </VStack>
  );
};

const PaymentMethodItem = ({
  _paymentMethod,
  imagePath,
  text,
  description,
}: any) => {
  const { paymentMethod, selectPaymentMethod } = useOrderStore();
  return (
    <AppContainer
      onClick={() => selectPaymentMethod(_paymentMethod)}
      state={
        _paymentMethod == paymentMethod
          ? ContainerState.ACTIVE
          : ContainerState.DEFAULT
      }
      className="cursor-pointer"
    >
      <VStack marginX={4}>
        <Image
          src={imagePath}
          className="xl:w-12 xl:h-12 md:w-8 md:h-8 object-cover object-center"
        />
        <Text fontWeight="bold">{text}</Text>
        <Text
          fontWeight="semibold"
          textAlign="center"
          className="text-slate-600 xl:text-md lg:text-sm md:text-sm"
        >
          {description}
        </Text>
      </VStack>
    </AppContainer>
  );
};

export default PaymentMethodBox;
