import { Flex, HStack, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import useBookDetailStore from "./store/book_detail.store";
import { UI } from "../../../core/util/ui.util";
import PrimaryButton from "../../../core/component/primary_button";
import { Spacer } from "@nextui-org/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import SecondaryButton from "../../../core/component/secondary_button";
import IncrementDecrementFormField from "../../../core/component/increment_decrement_form_field";

const BookCart = () => {
  const { book } = useBookDetailStore();

  const buildPrice = () => {
    if (book?.discount?.percentage) {
      return (
        <HStack>
          <Text fontSize="xl" fontWeight="semibold">
            {UI.formatNumberWithDots(
              Math.round(book.price * book?.discount?.percentage)
            )}{" "}
            VND
          </Text>
          <Text
            fontSize="md"
            className="text-slate-300"
            fontWeight="semibold"
            textDecoration="line-through"
          >
            {UI.formatNumberWithDots(book.price)} VND
          </Text>
        </HStack>
      );
    } else {
      return (
        <Text fontSize="xl" fontWeight="semibold" textDecoration="slategray">
          {UI.formatNumberWithDots(book!.price)} VND
        </Text>
      );
    }
  };

  const buildButtons = () => {
    return (
      <HStack spacing={5}>
        <SecondaryButton
          text={"Add to cart"}
          onClick={undefined}
          color={"default"}
        />
        <PrimaryButton text={"Buy now"} onClick={undefined} color={"default"} />
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
          onIncrement={undefined}
          value={"1"}
          onDecrement={undefined}
        />
      </HStack>
    );
  };

  return (
    <AppContainer>
      <Flex direction="column" gap={1}>
        {buildPrice()}
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
