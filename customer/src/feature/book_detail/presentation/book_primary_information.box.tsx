import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Spacer } from "@nextui-org/react";
import { StarIcon } from "@heroicons/react/24/solid";
import AppContainer from "../../../core/component/container";
import ImageCarousel from "../../../core/component/image_carousel";
import { UI } from "../../../core/util/ui.util";
import useBookDetailStore from "./store/book_detail.store";

const BookPrimaryInformation = () => {
  const { book } = useBookDetailStore();
  return (
    <VStack align="start" spacing={3}>
      <Text fontSize="3xl" fontWeight="bold">
        {book?.name}
      </Text>
      <Flex align="center" gap={3}>
        <StarIcon className="text-orange-500 w-6 h-6" />
        <Text fontSize="xl" fontWeight="bold" className="text-orange-500">
          {book?.averageRating}
        </Text>
        <Spacer x={3} />
        <Text fontSize="xl" className="text-slate-500">
          {UI.formatNumberWithDots(book?.totalSoldQuantity!)} sold
        </Text>
      </Flex>
      <Spacer x={3} />
      <ImageCarousel imageUrls={book?.imageUrls!} />
      <Spacer x={3} />
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Description
        </Text>
      </HStack>

      <AppContainer>
        <Text>{book?.description}</Text>
      </AppContainer>
    </VStack>
  );
};

export default BookPrimaryInformation;
