import { VStack, HStack, Avatar, Text, Textarea, Box } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import RatingStar from "../../../core/component/rating_star";
import AppInput from "../../../core/component/input";
import { UserIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../../../core/component/primary_button";

const CreateReviewForm = () => {
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
            />
          </Box>
          <Box flex={1}>
            <PrimaryButton
              onClick={undefined}
              text="Submit"
              color={"default"}
            />
          </Box>
        </HStack>
        <HStack>
          <Text className="text-slate-300 font-semibold">
            How would you rate this book out of 5?
          </Text>
          <RatingStar value={0} />
        </HStack>
        <Textarea
          focusBorderColor="black"
          placeholder="How do you think about this book?"
        />
      </VStack>
    </AppContainer>
  );
};

export default CreateReviewForm;
