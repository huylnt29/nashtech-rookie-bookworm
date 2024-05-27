import RequestState from "../../../../core/data/enum/request_state.enum";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  authors: Array<Author>;
  booksResultRequestState: RequestState;
  filteredBooks: Array<FilteredBook>;
  fetchFilter: () => Promise<void>;
  filterBooks: () => Promise<void>;
}

export default BookstoreState;
