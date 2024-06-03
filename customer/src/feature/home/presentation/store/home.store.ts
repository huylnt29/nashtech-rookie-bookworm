import { create } from "zustand";
import HomeState from "./home.state";
import RequestState from "../../../../core/data/enum/request_state.enum";
import { CollectionRepository } from "../../domain/collection.repository";

const useHomeStore = create<HomeState>()((set, get) => {
  return {
    requestState: RequestState.IDLE,
    onSaleCollection: null,
    async fetch() {
      set(() => ({
        requestState: RequestState.LOADING,
      }));
      const res = await CollectionRepository.getOnSale();
      set(() => ({
        requestState: RequestState.LOADED,
        onSaleCollection: res,
      }));
    },
  };
});

export default useHomeStore;
