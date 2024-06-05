import { VStack } from "@chakra-ui/react";

import useHomeStore from "./store/home.store";
import { useEffect } from "react";
import OnSaleCollectionListView from "./on_sale_collection.list_view";
import { CategoryGrid } from "./category.grid";
import PopularCollectionGrid from "./popular_collection.grid";
import RecommendedCollectionGrid from "./recommended_collection.grid";
import RequestState from "../../../core/data/enum/request_state.enum";
import DynamicCollection from "./dynamic_collection";

const HomeScreen = () => {
  const { fetch, requestState, otherCollections } = useHomeStore();

  useEffect(() => {
    fetch();
  }, []);

  if (requestState != RequestState.LOADED) return <></>;
  return (
    <VStack overflow="hidden">
      <OnSaleCollectionListView />
      <CategoryGrid />
      <PopularCollectionGrid />
      <RecommendedCollectionGrid />
      {otherCollections?.map((collection) => (
        <DynamicCollection key={collection.name} {...collection} />
      ))}
    </VStack>
  );
};

export default HomeScreen;
