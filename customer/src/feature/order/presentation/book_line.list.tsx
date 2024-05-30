import { Box, Flex, HStack, Text, VStack, Spacer } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Image } from "@nextui-org/react";
import useOrderStore from "./store/order.store";
import { TrashIcon } from "@heroicons/react/24/solid";
import IncrementDecrementFormField from "../../../core/component/increment_decrement_form_field";
import BookPrice from "../../../core/component/book_price";
import { UI } from "../../../core/util/ui.util";

const BookLineList = () => {
  const { cart } = useOrderStore();
  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          List of books
        </Text>
      </HStack>

      {cart.lines?.map((line) => (
        <BookLineCard key={line.book!.id} bookLine={line} />
      ))}
    </VStack>
  );
};

const BookLineCard = ({ bookLine }: any) => {
  const { book, quantity } = bookLine;
  const { deleteBookLine, incrementBookByLine, decrementBookByLine } =
    useOrderStore();

  return (
    <AppContainer width="100%">
      <Flex gap={8} align="center">
        <Box width="30%">
          <Image
            src={book!.imageUrls[0]}
            className="w-32 h-44 object-cover object-center"
          />
        </Box>
        <VStack width="60%" align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            {book!.name}
          </Text>
          <BookPrice
            initialPrice={book!.price}
            discountPercentage={book!.discount.percentage}
          />
          <Spacer />
          <IncrementDecrementFormField
            onIncrement={() => incrementBookByLine(book.id)}
            value={quantity!}
            onDecrement={() =>
              quantity! > 1
                ? decrementBookByLine(book.id)
                : deleteBookLine(book.id)
            }
          />
          <Text>
            Line total:{" "}
            <span className="font-bold">
              {UI.formatNumberWithDots(bookLine!.getTotal!())} VND
            </span>
          </Text>
        </VStack>

        <Box width="10%">
          <TrashIcon
            onClick={() => deleteBookLine(book.id)}
            className="w-8 h-8 text-red-900 cursor-pointer hover:animate-wiggle hover:text-red-700 transition ease-in-out"
          />
        </Box>
      </Flex>
    </AppContainer>
  );
};

export default BookLineList;
