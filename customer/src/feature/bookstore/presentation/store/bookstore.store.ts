import { create } from "zustand";
import BookstoreRepository from "../../domain/bookstore.repository";
import RequestState from "../../../../core/data/enum/request_state.enum";
import BookstoreState from "./bookstore.state";
import { FilterBookRequest } from "../../data/model/filter_book_request.class";

const useBookstoreStore = create<BookstoreState>()((set, get) => {
  return {
    filterDataRequestState: RequestState.IDLE,
    categories: [],
    authors: [],
    booksResultRequestState: RequestState.IDLE,
    filteredBooks: [],
    filterRequest: new FilterBookRequest(),
    fetchFilter: async () => {
      set(() => ({
        filterDataRequestState: RequestState.LOADING,
      }));
      const res = await BookstoreRepository.fetchBookFilterMenu();
      set(() => ({
        filterDataRequestState: RequestState.LOADED,
        categories: res.categories,
        authors: res.authors,
      }));
    },
    updateFilterRequest(property, value) {
      let newFilterRequest: FilterBookRequest;
      switch (property) {
        case "categoryIds":
          newFilterRequest = get().filterRequest.toggleCategory(value);
          break;
        case "authorIds":
          newFilterRequest = get().filterRequest.toggleAuthor(value);
          break;
        default:
          newFilterRequest = get().filterRequest.copyWith({
            [property]: value,
          });
          break;
      }
      set(() => ({
        filterRequest: newFilterRequest,
      }));
    },
    filterBooks: async (filterRequest: FilterBookRequest) => {
      set(() => ({
        booksResultRequestState: RequestState.LOADING,
      }));
      const res = await BookstoreRepository.filterBooks(filterRequest);
      set(() => ({
        booksResultRequestState: RequestState.LOADED,
        filteredBooks: res.data,
        filterRequest: filterRequest,
      }));
    },
  };
});

export default useBookstoreStore;
