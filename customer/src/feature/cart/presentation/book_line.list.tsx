import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { BookLine } from "../data/model/cart.class";
import { Image } from "@nextui-org/react";
import useCartStore from "./store/cart.store";
import { TrashIcon } from "@heroicons/react/24/solid";
import IncrementDecrementFormField from "../../../core/component/increment_decrement_form_field";
import BookPrice from "../../../core/component/book_price";

const BookLineList = () => {
  const { cart } = useCartStore();
  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          List of books
        </Text>
      </HStack>

      {cart.lines?.map((line) => (
        <BookLineCard key={line.book!.id} {...line} />
      ))}
    </VStack>
  );
};

const BookLineCard = ({ book, quantity }: BookLine) => {
  return (
    <AppContainer width="100%">
      <Flex gap={8} align="center">
        <Image
          src={book!.imageUrls[0]}
          className="w-32 h-44 object-cover object-center"
        />
        <VStack align="start">
          <Text fontSize="lg" fontWeight="bold">
            {book!.name}
          </Text>
          <BookPrice
            initialPrice={book!.price}
            discountPercentage={book!.discount.percentage}
          />
          <IncrementDecrementFormField
            onIncrement={() => undefined}
            value={quantity!}
            onDecrement={() => undefined}
          />
        </VStack>
        <Spacer />
        <TrashIcon
          onClick={undefined}
          className="w-8 h-8 text-red-900 cursor-pointer hover:animate-wiggle transition ease-in-out"
        />
      </Flex>
    </AppContainer>
  );
};

export default BookLineList;
