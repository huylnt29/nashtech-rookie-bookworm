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
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {filteredBooks.map((book) => (
        <GridItem key={book.id}>
          <FilteredBookCard
            id={book.id}
            imageUrls={book.imageUrls}
            name={book.name}
            price={book.batches[0].price}
            discountPercentage={book.batches[0].discount?.percentage}
            totalSoldQuantity={book.totalSoldQuantity}
            averageRating={book.averageRating}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default FilterResultGrid;
