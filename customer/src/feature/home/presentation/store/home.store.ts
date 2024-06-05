import { create } from "zustand";
import HomeState from "./home.state";
import RequestState from "../../../../core/data/enum/request_state.enum";
import { CollectionRepository } from "../../domain/collection.repository";

const useHomeStore = create<HomeState>()((set, get) => {
  return {
    requestState: RequestState.IDLE,
    onSaleCollection: null,
    popularCollection: null,
    recommendedCollection: null,
    otherCollections: null,
    async fetch() {
      set(() => ({
        requestState: RequestState.LOADING,
      }));
      const feature = await CollectionRepository.getFeature();
      const others = await CollectionRepository.getOthers();
      set(() => ({
        requestState: RequestState.LOADED,
        onSaleCollection: feature[0],
        popularCollection: feature[1],
        recommendedCollection: feature[2],
        otherCollections: others,
      }));
    },
  };
});

export default useHomeStore;
