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
    createReviewError: null,
    fetch: async (id: string) => {
      set(() => ({
        getRequestState: RequestState.LOADING,
      }));
      const res = await BookDetailRepository.get(id);
      set(() => ({
        getRequestState: RequestState.LOADED,
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
      const res = await BookDetailRepository.postReview(
        get().review.copyWith({ bookId: get().book!.id })
      );
      if (res.id) {
        get().fetch(get().book!.id.toString());
      } else {
        set(() => ({
          createReviewError: res.message,
        }));
      }
    },
  };
});

export default useBookDetailStore;
