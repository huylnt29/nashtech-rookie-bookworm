import { create } from "zustand";
import BookstoreRepository from "../../domain/bookstore.repository";
import RequestState from "../../../../core/data/enum/request_state.enum";
import BookstoreState from "./bookstore.state";

const useBookstoreStore = create<BookstoreState>()((set, get) => {
  return {
    filterDataRequestState: RequestState.IDLE,
    categories: [],
    selectedCategories: [],
    authors: [],
    selectedAuthors: [],
    booksResultRequestState: RequestState.IDLE,
    filteredBooks: [],
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
    filterBooks: async () => {
      set(() => ({
        booksResultRequestState: RequestState.LOADING,
      }));
      const res = await BookstoreRepository.filterBooks(
        get().selectedCategories,
        get().selectedAuthors
      );

      set(() => ({
        booksResultRequestState: RequestState.LOADED,
        filteredBooks: res.data,
      }));
    },
  };
});

export default useBookstoreStore;
