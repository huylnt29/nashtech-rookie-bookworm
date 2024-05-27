import { Box, Flex } from "@chakra-ui/react";
import FilterCriteriaArea from "./filter_criteria.area";
import BookResultArea from "./book_result.area";

const ViewBookstoreScreen = () => {
  return (
    <Flex justify="center" mx="10%" gap={8}>
      <Box width="30%">
        <FilterCriteriaArea />
      </Box>
      <Box width="70%">
        <BookResultArea />
      </Box>
    </Flex>
  );
};

export default ViewBookstoreScreen;
