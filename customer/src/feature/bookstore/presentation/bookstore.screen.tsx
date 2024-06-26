import { useEffect } from "react";
import { Spacer } from "@nextui-org/react";
import { Box, Flex } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FilterMenu from "./filter_menu.box";
import FilterResultGrid from "./filter_result.grid";
import useBookstoreStore from "./store/bookstore.store";
import {
  FilterBookRequest,
  FilterBookRequestProperty,
} from "../data/model/filter_book_request.class";
import Paginator from "../../../core/component/paginator";
import { RouteBuilder } from "../../../core/router/route_path";
import SortBookBox from "./sort_book.box";

const BookstoreScreen = () => {
  const { filterBooks, paginationMeta, filterRequest } = useBookstoreStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const buildFilterBookRequest = () => {
    let filterRequest = new FilterBookRequest();
    for (let entry of searchParams.entries()) {
      let property = entry[0] as FilterBookRequestProperty;
      if (entry[1] === "undefined" || entry[1] === "") continue;
      switch (property) {
        case "search":
          let search = entry[1];
          filterRequest.search = search;
          break;
        case "categoryIds":
          let categoryIds = entry[1].split(",").map((e) => +e);
          filterRequest.categoryIds = categoryIds;
          break;
        case "authorIds":
          let authorIds = entry[1].split(",").map((e) => +e);
          filterRequest.authorIds = authorIds;
          break;
        case "sortBy":
          filterRequest.sortBy = entry[1];
          break;
        case "sortDirection":
          filterRequest.sortDirection = +entry[1] == 0 ? "asc" : "desc";
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
    <Flex justify="center" mx="10%" gap={8} className="flex-wrap">
      <Box className="min-w-[300px]">
        <FilterMenu />
      </Box>
      <Box className="flex-1">
        <SortBookBox />
        <Spacer y={5} />
        <FilterResultGrid />
        <Spacer y={12} />
        <Paginator
          currentPage={paginationMeta?.page ?? 1}
          totalPage={paginationMeta?.totalPages ?? 1}
          onChange={(value) => {
            let newFilterRequest = filterRequest.copyWith({
              page: value,
            });
            navigate(RouteBuilder.buildStorePath(newFilterRequest), {
              replace: true,
            });
            filterBooks(newFilterRequest);
          }}
        />
      </Box>
    </Flex>
  );
};

export default BookstoreScreen;
