import { Flex, VStack } from "@chakra-ui/react";
import BookLineList from "./book_line.list";
import PriceCalculationBox from "./price_calculation.box";
import BuyerInformationForm from "./buyer_information.form";
import PaymentMethodBox from "./payment_method.box";
import PrimaryButton from "../../../core/component/primary_button";

const CartScreen = () => {
  const buildSubmitButton = () => {
    return (
      <PrimaryButton text={"Submit"} onClick={undefined} color={"default"} />
    );
  };
  return (
    <Flex marginX="15%" justify="space-between" gap="7%">
      <VStack width="55%" spacing={8}>
        <PriceCalculationBox />
        <BuyerInformationForm />
        <PaymentMethodBox />
        {buildSubmitButton()}
      </VStack>
      <VStack width="45%" spacing={8}>
        <BookLineList />
      </VStack>
    </Flex>
  );
};

export default CartScreen;
