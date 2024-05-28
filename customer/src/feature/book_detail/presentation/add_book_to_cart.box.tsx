import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import useBookDetailStore from "./store/book_detail.store";
import { UI } from "../../../core/util/ui.util";
import PrimaryButton from "../../../core/component/primary_button";
import RequestState from "../../../core/data/enum/request_state.enum";
import { Spacer } from "@nextui-org/react";
import { ClockIcon } from "@heroicons/react/24/solid";

const AddBookToCart = () => {
  const { book, requestState } = useBookDetailStore();

  const buildPrice = () => {
    if (requestState != RequestState.LOADED) return <></>;
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

  return (
    <AppContainer>
      <Flex direction="column" gap={1}>
        {buildPrice()}
        <Spacer y={1} />
        <Text fontSize="lg" className="text-gray-500">
          This discount expires at
        </Text>
        <HStack>
          <ClockIcon className="text-red-700 w-6 h-6" />
          <Text className="text-red-700 font-bold text-lg">
            {new Date(book!.discount.endAt).toLocaleString()}
          </Text>
        </HStack>
        <Spacer y={1} />
        <Text fontSize="xl" fontWeight="bold">
          {book?.remainingQuantity}
          <span className="font-normal"> remaining</span>
        </Text>
        <Spacer y={1} />
        <PrimaryButton
          text={"Add to cart"}
          onClick={undefined}
          colorScheme={""}
          color={"default"}
        />
      </Flex>
    </AppContainer>
  );
};

export default AddBookToCart;
