import RequestState from "../../../../core/data/enum/request_state.enum";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  authors: Array<Author>;
  booksResultRequestState: RequestState;
  fetchFilter: () => Promise<void>;
}

export default BookstoreState;