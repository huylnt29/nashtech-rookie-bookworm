import { create } from "zustand";
import BookstoreRepository from "../../domain/book_detail.repository";
import RequestState from "../../../../core/data/enum/request_state.enum";
import BookDetailState from "./book_detail.state";
import BookDetailRepository from "../../domain/book_detail.repository";

const useBookDetailStore = create<BookDetailState>()((set, get) => {
  return {
    requestState: RequestState.IDLE,
    book: null,
    fetch: async (id: string) => {
      set(() => ({
        requestState: RequestState.LOADING,
      }));
      const res = await BookDetailRepository.fetchBook(id);
      set(() => ({
        requestState: RequestState.LOADED,
        book: res,
      }));
    },
  };
});

export default useBookDetailStore;
