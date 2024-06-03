import { create } from "zustand";
import RequestState from "../../../../core/data/enum/request_state.enum";
import BookDetailState from "./book_detail.state";
import BookDetailRepository from "../../domain/book_detail.repository";
import { CreateReviewRequest } from "../../data/model/create_review_request.class";

const useBookDetailStore = create<BookDetailState>()((set, get) => {
  return {
    getRequestState: RequestState.IDLE,
    book: null,
    review: new CreateReviewRequest(),
    fetch: async (id: string) => {
      set(() => ({
        getRequestState: RequestState.LOADING,
      }));
      const res = await BookDetailRepository.get(id);
      set(() => ({
        requestState: RequestState.LOADED,
        book: res,
      }));
    },
    updateReview(property, value) {
      set((state) => ({
        review: state.review.copyWith({
          [property]: value,
        }),
      }));
    },
    async submitReview() {
      await BookDetailRepository.postReview(
        get().review.copyWith({ bookId: get().book!.id })
      );
      get().fetch(get().book!.id.toString());
    },
  };
});

export default useBookDetailStore;
