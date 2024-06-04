import { Box, Flex } from "@chakra-ui/react";
import FilterMenu from "./filter_menu.box";
import FilterResultGrid from "./filter_result.grid";
import useBookstoreStore from "./store/bookstore.store";
import {
  FilterBookRequest,
  FilterBookRequestProperty,
} from "../data/model/filter_book_request.class";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BookstoreScreen = () => {
  const { filterBooks } = useBookstoreStore();
  const [searchParams] = useSearchParams();

  const buildFilterBookRequest = () => {
    let filterRequest = new FilterBookRequest();
    for (let entry of searchParams.entries()) {
      let property = entry[0] as FilterBookRequestProperty;
      if (entry[1] === "undefined") continue;
      switch (property) {
        case "categoryIds":
          let categoryIds = entry[1].split(",").map((e) => +e);
          filterRequest.categoryIds = categoryIds;
          break;
        case "page":
          filterRequest.page = +entry[1];
          break;
      }
    }

    filterBooks(filterRequest);
  };

  useEffect(() => {
    buildFilterBookRequest();
  }, []);

  return (
    <Flex justify="center" mx="10%" gap={8}>
      <Box width="30%">
        <FilterMenu />
      </Box>
      <Box width="70%">
        <FilterResultGrid />
      </Box>
    </Flex>
  );
};

export default BookstoreScreen;
