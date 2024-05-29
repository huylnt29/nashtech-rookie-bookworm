import RequestState from "../../../../core/data/enum/request_state.enum";
import { Author } from "../../../../core/data/type/author.type";
import { Category } from "../../../../core/data/type/category.type";
import { FilteredBook } from "../../data/model/filtered_book.model";

interface BookstoreState {
  filterDataRequestState: RequestState;
  categories: Array<Category>;
  selectedCategories: Array<Category>;
  authors: Array<Author>;
  selectedAuthors: Array<Author>;
  booksResultRequestState: RequestState;
  filteredBooks: Array<FilteredBook>;
  fetchFilter: () => Promise<void>;
  filterBooks: () => Promise<void>;
}

export default BookstoreState;
