import RequestState from "../../../../core/data/enum/request_state.enum";
import { Author } from "../../../../core/data/type/author.type";
import { Category } from "../../../../core/data/type/category.type";
import {
  FilterBookRequest,
  FilterBookRequestProperty,
} from "../../data/model/filter_book_request.class";
import { FilteredBook } from "../../data/model/filtered_book.type";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  authors: Array<Author>;
  booksResultRequestState: RequestState;
  filteredBooks: Array<FilteredBook>;
  filterRequest: FilterBookRequest;
  fetchFilter: () => Promise<void>;
  updateFilterRequest: (
    property: FilterBookRequestProperty,
    value: any
  ) => void;
  filterBooks: (filterRequest: FilterBookRequest) => Promise<void>;
}

export default BookstoreState;
