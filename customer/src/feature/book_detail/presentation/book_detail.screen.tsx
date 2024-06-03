import { Box, Flex, VStack } from "@chakra-ui/react";
import useBookDetailStore from "./store/book_detail.store";
import { useEffect } from "react";
import { useParams } from "react-router";
import RequestState from "../../../core/data/enum/request_state.enum";
import { Spacer } from "@nextui-org/react";
import BookPrimaryInformation from "./book_primary_information.box";
import BookCart from "./book_cart.box";
import BookReviewListView from "./book_review.list_view";

const BookDetailScreen = () => {
  const { book, fetch, getRequestState } = useBookDetailStore();
  const { id } = useParams();

  useEffect(() => {
    fetch(id!);
  }, []);

  if (getRequestState != RequestState.LOADED) return;

  return (
    <Flex marginX="15%" justify="space-between" gap="7%">
      <VStack width="70%" spacing={8}>
        <BookPrimaryInformation />
        <BookReviewListView />
        <Spacer y={72} />
      </VStack>
      <Box width="30%">
        <BookCart />
      </Box>
    </Flex>
  );
};

export default BookDetailScreen;
