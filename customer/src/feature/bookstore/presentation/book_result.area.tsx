import { useEffect } from "react";
import useBookstoreStore from "./store/bookstore.store";
import { Grid, GridItem } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import RequestState from "../../../core/data/enum/request_state.enum";
import FilteredBookCard from "./filtered_book.card";

const BookResultArea = () => {
  const { filterBooks, booksResultRequestState, filteredBooks } =
    useBookstoreStore();

  useEffect(() => {
    filterBooks();
  }, []);

  if (booksResultRequestState != RequestState.LOADED) return;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {filteredBooks.map((book) => (
        <GridItem>
          <FilteredBookCard {...book} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default BookResultArea;
