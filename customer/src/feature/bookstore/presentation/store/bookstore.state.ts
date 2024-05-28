import RequestState from "../../../../core/data/enum/request_state.enum";
import { Author } from "../../data/model/author.model";
import { Category } from "../../data/model/category.model";
import { Batch } from "../../data/model/filtered_book.model";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  authors: Array<Author>;
  booksResultRequestState: RequestState;
  filteredBooks: Array<Batch>;
  fetchFilter: () => Promise<void>;
  filterBooks: () => Promise<void>;
}

export default BookstoreState;
