import { Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { BookLine } from "../data/model/cart.class";
import { Image } from "@nextui-org/react";
import useCartStore from "./store/cart.store";
import { TrashIcon } from "@heroicons/react/24/solid";
import IncrementDecrementFormField from "../../../core/component/increment_decrement_form_field";
import { UI } from "../../../core/util/ui.util";

const BookLineList = () => {
  const { cart } = useCartStore();
  return (
    <VStack align="start">
      <Text fontSize="xl" fontWeight="bold">
        List of books
      </Text>
      {cart.lines?.map((line) => (
        <BookLineCard key={line.book.id} {...line} />
      ))}
    </VStack>
  );
};

const BookLineCard = ({ book, quantity }: BookLine) => {
  return (
    <AppContainer width="100%">
      <Flex gap={8} align="center">
        <Image
          src={book.imageUrls[0]}
          className="w-32 h-44 object-cover object-center"
        />
        <VStack align="start">
          <Text fontSize="lg" fontWeight="bold">
            {book.name}
          </Text>
          <Text fontSize="md" fontWeight="semibold" className="text-slate-500">
            {UI.formatNumberWithDots(book.price)} VND
          </Text>
          <IncrementDecrementFormField
            onIncrement={() => undefined}
            value={quantity}
            onDecrement={() => undefined}
          />
        </VStack>
        <Spacer />
        <TrashIcon
          onClick={undefined}
          className="w-8 h-8 text-red-900 cursor-pointer hover:animate-bounce transition ease-in-out"
        />
      </Flex>
    </AppContainer>
  );
};

export default BookLineList;
