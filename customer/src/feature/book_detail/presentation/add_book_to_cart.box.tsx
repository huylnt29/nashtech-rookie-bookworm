import { Flex, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import useBookDetailStore from "./store/book_detail.store";
import { UI } from "../../../core/util/ui.util";
import PrimaryButton from "../../../core/component/primary_button";

const AddBookToCart = () => {
  const { book } = useBookDetailStore();

  const buildPrice = () => {
    if (book?.batches[0]!.discount?.percentage) {
      return (
        <VStack align="start">
          <Text fontSize="xl" fontWeight="semibold">
            {UI.formatNumberWithDots(
              Math.round(
                book.batches[0].price * book?.batches[0]!.discount?.percentage
              )
            )}{" "}
            VND
          </Text>
          <Text
            fontSize="md"
            className="text-slate-300"
            fontWeight="semibold"
            textDecoration="line-through"
          >
            {UI.formatNumberWithDots(book.batches[0].price)} VND
          </Text>
        </VStack>
      );
    } else {
      return (
        <Text fontSize="xl" fontWeight="semibold" textDecoration="slategray">
          {UI.formatNumberWithDots(book!.batches[0].price)} VND
        </Text>
      );
    }
  };

  return (
    <AppContainer>
      <Flex direction="column" gap={4}>
        {buildPrice()}
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
