import { Box, Flex } from "@chakra-ui/react";
import FilterCriteriaArea from "./filter_criteria.area";
import BookResultArea from "./book_result.area";

const ViewBookstoreScreen = () => {
  return <Flex justify='center' mx='10%'>
    <Box flexGrow={1}>
      <FilterCriteriaArea />
    </Box>
    <Box flexGrow={2}>
      <BookResultArea />
    </Box>
  </Flex>;
};

export default ViewBookstoreScreen;
