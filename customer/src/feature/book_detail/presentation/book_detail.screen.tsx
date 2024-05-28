import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import useBookDetailStore from "./store/book_detail.store";
import { useEffect } from "react";
import { useParams } from "react-router";
import { StarIcon } from "@heroicons/react/24/solid";
import ImageCarousel from "../../../core/component/image_carousel";
import RequestState from "../../../core/data/enum/request_state.enum";
import { Spacer } from "@nextui-org/react";
import Color from "../../../core/theme/theme";
import { UI } from "../../../core/util/ui.util";
import AppContainer from "../../../core/component/container";
import BookPrimaryInformation from "./book_primary_information.box";
import AddBookToCart from "./add_book_to_cart.box";
import BookReviewListBox from "./book_review_list.box";

const BookDetailScreen = () => {
  const { book, fetch, requestState } = useBookDetailStore();
  const { id } = useParams();

  useEffect(() => {
    fetch(id!);
  }, []);

  if (requestState != RequestState.LOADED) return;

  return (
    <Flex marginX="21%" justify="space-between" gap="7%">
      <VStack width="70%" spacing={8}>
        <BookPrimaryInformation />
        <BookReviewListBox />
        <Spacer y={72} />
      </VStack>
      <Box width="30%">
        <AddBookToCart />
      </Box>
    </Flex>
  );
};

export default BookDetailScreen;
