import { VStack, HStack, Text, Textarea, Box } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import RatingStar from "../../../core/component/rating_star";
import AppInput from "../../../core/component/input";
import { UserIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../../../core/component/primary_button";
import useBookDetailStore from "./store/book_detail.store";

const CreateReviewForm = () => {
  const { review, updateReview, submitReview, createReviewError } =
    useBookDetailStore();
  return (
    <AppContainer width="100%">
      <VStack align="start" spacing={3}>
        <HStack justify="space-between" width="100%" spacing={8}>
          <Box flex={2}>
            <AppInput
              type={"text"}
              placeholder={"Let us know your name"}
              value={undefined}
              leftIcon={<UserIcon />}
              focusBorderColor={"black"}
              onChange={(event) => updateReview("author", event.target.value)}
            />
          </Box>
          <Box flex={1}>
            <PrimaryButton
              onClick={submitReview}
              text="Submit"
              color={"default"}
            />
          </Box>
        </HStack>
        <HStack>
          <Text className="text-slate-300 font-semibold">
            How would you rate this book out of 5?
          </Text>
          <RatingStar
            value={review.rating ?? 0}
            onChange={(event) => updateReview("rating", event)}
          />
        </HStack>
        <Textarea
          focusBorderColor="black"
          placeholder="How do you think about this book?"
          onChange={(event) => updateReview("content", event.target.value)}
        />
        <Text className="text-red-700 font-semibold">{createReviewError}</Text>
      </VStack>
    </AppContainer>
  );
};

export default CreateReviewForm;
