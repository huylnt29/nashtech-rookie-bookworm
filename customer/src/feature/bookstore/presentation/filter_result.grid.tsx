import { useEffect } from "react";
import useBookstoreStore from "./store/bookstore.store";
import { Grid, GridItem } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import RequestState from "../../../core/data/enum/request_state.enum";
import FilteredBookCard from "./filtered_book.card";

const FilterResultGrid = () => {
  const { filterBooks, booksResultRequestState, filteredBooks } =
    useBookstoreStore();

  useEffect(() => {
    filterBooks();
  }, []);

  if (booksResultRequestState != RequestState.LOADED) return;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {filteredBooks.map((batch) => (
        <GridItem key={batch.id}>
          <FilteredBookCard
            id={batch.id}
            imageUrls={batch.book.imageUrls}
            name={batch.book.name}
            price={batch.price}
            discountPercentage={batch.discount?.percentage}
            totalSoldQuantity={batch.book.totalSoldQuantity}
            averageRating={batch.book.averageRating}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default FilterResultGrid;
