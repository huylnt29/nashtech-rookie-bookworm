import { HStack, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Review } from "../data/model/book_detail.type";
import { Avatar } from "@nextui-org/react";
import RatingStar from "../../../core/component/rating_star";

const ReviewCard = (review: Review) => {
  return (
    <AppContainer width="100%">
      <VStack align="start" spacing={3}>
        <HStack spacing={3}>
          <Avatar
            src={`https://anonymous-animals.azurewebsites.net/avatar/${review.author}`}
          />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">{review.author}</Text>
            <Text fontWeight="semibold" className="text-slate-500">
              {new Date(review.updatedAt).toLocaleString()}
            </Text>
          </VStack>
        </HStack>
        <RatingStar value={review.rating} />
        <Text>{review.content}</Text>
      </VStack>
    </AppContainer>
  );
};

export default ReviewCard;
