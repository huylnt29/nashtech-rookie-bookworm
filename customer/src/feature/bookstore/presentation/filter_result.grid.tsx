import useBookstoreStore from "./store/bookstore.store";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import RequestState from "../../../core/data/enum/request_state.enum";
import FilteredBookCard from "./filtered_book.card";
import Announcement from "../../../core/component/announcement";

const FilterResultGrid = () => {
  const { booksResultRequestState, filteredBooks } = useBookstoreStore();

  if (booksResultRequestState != RequestState.LOADED) return;
  if (filteredBooks.length < 1)
    return (
      <Announcement
        imagePath={"/illustration_no_book.svg"}
        text={"We have not had any books matched your filter."}
      />
    );
  return (
    <Grid gap={6} className="md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {filteredBooks.map((batch) => (
        <GridItem key={batch.id}>
          <FilteredBookCard {...batch} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default FilterResultGrid;
