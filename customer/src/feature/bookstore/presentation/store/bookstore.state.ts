import RequestState from "../../../../core/data/enum/request_state.enum";
import { Author } from "../../../../core/data/type/author.type";
import { Category } from "../../../../core/data/type/category.type";
import { PaginationMeta } from "../../../../core/data/type/pagination_meta.type";
import {
  FilterBookRequest,
  FilterBookRequestProperty,
} from "../../data/model/filter_book_request.class";
import { FilteredBatch } from "../../data/model/filtered_book.type";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  authors: Array<Author>;
  booksResultRequestState: RequestState;
  paginationMeta?: PaginationMeta | null;
  filteredBooks: Array<FilteredBatch>;
  filterRequest: FilterBookRequest;
  fetchFilter: () => Promise<void>;
  updateFilterRequest: (
    property: FilterBookRequestProperty,
    value: any
  ) => void;
  filterBooks: (filterRequest: FilterBookRequest) => Promise<void>;
}

export default BookstoreState;
