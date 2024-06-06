import { Flex, VStack } from "@chakra-ui/react";
import BookLineList from "./book_line.list";
import PriceCalculationBox from "./price_calculation.box";
import BuyerInformationForm from "./buyer_information.form";
import PaymentMethodBox from "./payment_method.box";
import PrimaryButton from "../../../core/component/primary_button";
import useOrderStore from "./store/order.store";
import RequestState from "../../../core/data/enum/request_state.enum";
import LoadingModal from "../../../core/component/loading_modal";
import OrderSuccessDialog from "./order_success.dialog";
import { Spacer } from "@nextui-org/react";
import Announcement from "../../../core/component/announcement";

const CartScreen = () => {
  const { cart, submit, submitRequestState } = useOrderStore();

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
        return <OrderSuccessDialog />;
      case RequestState.ERROR:
        return <>Not ok</>;
    }
  };

  if (!cart || cart.isEmpty())
    return (
      <Announcement
        imagePath="/illustration_empty_cart.svg"
        text="There's nothing in your cart. Let's come back and find something great"
      />
    );
  return (
    <Flex marginX="15%" justify="space-between" gap={8} flexWrap="wrap-reverse">
      <VStack flex={1} spacing={8}>
        <PriceCalculationBox />
        <BuyerInformationForm />
        <PaymentMethodBox />
        <Spacer y={1} />
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
