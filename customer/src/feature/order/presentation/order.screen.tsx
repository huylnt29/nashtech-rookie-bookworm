import { Flex, VStack } from "@chakra-ui/react";
import BookLineList from "./book_line.list";
import PriceCalculationBox from "./price_calculation.box";
import BuyerInformationForm from "./buyer_information.form";
import PaymentMethodBox from "./payment_method.box";
import PrimaryButton from "../../../core/component/primary_button";
import useOrderStore from "./store/order.store";
import RequestState from "../../../core/data/enum/request_state.enum";
import LoadingModal from "../../../core/component/loading_modal";

const CartScreen = () => {
  const { submit, submitRequestState } = useOrderStore();
  const buildSubmitButton = () => {
    return <PrimaryButton text={"Submit"} onClick={submit} color={"default"} />;
  };
  const buildSubmissionResult = () => {
    switch (submitRequestState) {
      case RequestState.IDLE:
        return <></>;
      case RequestState.LOADING:
        return <LoadingModal />;
      case RequestState.LOADED:
        return <>OK</>;
      case RequestState.ERROR:
        return <>Not ok</>;
    }
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
      {buildSubmissionResult()}
    </Flex>
  );
};

export default CartScreen;
