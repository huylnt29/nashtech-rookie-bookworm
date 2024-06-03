import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import ReviewCard from "./review.card";
import useBookDetailStore from "./store/book_detail.store";
import CreateReviewForm from "./create_review.form";

const BookReviewListView = () => {
  const { book } = useBookDetailStore();
  return (
    <VStack align="start">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Reviews
        </Text>
      </HStack>
      <CreateReviewForm />
      {book?.reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </VStack>
  );
};

export default BookReviewListView;
