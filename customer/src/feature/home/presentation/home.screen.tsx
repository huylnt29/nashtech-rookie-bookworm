import { VStack } from "@chakra-ui/react";
import OnSaleCollectionListView from "./on_sale_collection.list_view";
import useHomeStore from "./store/home.store";
import { useEffect } from "react";

const HomeScreen = () => {
  const { fetch } = useHomeStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <VStack overflow="hidden">
      <OnSaleCollectionListView />
    </VStack>
  );
};

export default HomeScreen;
