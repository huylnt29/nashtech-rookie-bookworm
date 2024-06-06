import { Flex, HStack, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import useBookDetailStore from "./store/book_detail.store";
import { UI } from "../../../core/util/ui.util";
import PrimaryButton from "../../../core/component/primary_button";
import { Spacer } from "@nextui-org/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import SecondaryButton from "../../../core/component/secondary_button";
import IncrementDecrementFormField from "../../../core/component/increment_decrement_form_field";
import useOrderStore from "../../order/presentation/store/order.store";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { RoutePath } from "../../../core/router/route_path";
import BookPrice from "../../../core/component/book_price";

const BookCart = () => {
  const { book } = useBookDetailStore();
  const { addBookLine } = useOrderStore();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);

  const handleBuyNow = () => {
    addBookLine(book!, quantity);
    navigate(RoutePath.CHECK_OUT);
  };

  const buildButtons = () => {
    return (
      <HStack spacing={5}>
        <SecondaryButton
          text={"Add to cart"}
          onClick={() => addBookLine(book!, quantity)}
          color={"default"}
        />
        <PrimaryButton
          text={"Buy now"}
          onClick={handleBuyNow}
          color={"default"}
        />
      </HStack>
    );
  };

  const buildSetQuantity = () => {
    return (
      <HStack spacing={8} justify="space-between">
        <Text fontSize="lg" className="text-gray-500">
          Quantity:
        </Text>
        <IncrementDecrementFormField
          onIncrement={() => setQuantity(quantity + 1)}
          value={quantity}
          onDecrement={() => setQuantity(quantity - 1)}
        />
      </HStack>
    );
  };

  return (
    <AppContainer width="fit-content">
      <Flex direction="column" gap={1}>
        <BookPrice
          initialPrice={book!.price}
          discountPercentage={book!.discount.percentage}
        />
        <Spacer y={1} />
        <Text fontSize="lg" className="text-gray-500">
          This discount expires at
        </Text>
        <HStack>
          <ClockIcon className="text-red-900 w-6 h-6" />
          <Text className="text-red-900 font-bold text-lg">
            {new Date(book!.discount.endAt).toLocaleString()}
          </Text>
        </HStack>
        <Spacer y={1} />
        <Text fontSize="xl" fontWeight="bold">
          {book?.remainingQuantity}
          <span className="font-normal"> remaining</span>
        </Text>
        <Spacer y={3} />
        {buildSetQuantity()}
        <Spacer y={1} />
        {buildButtons()}
      </Flex>
    </AppContainer>
  );
};

export default BookCart;
