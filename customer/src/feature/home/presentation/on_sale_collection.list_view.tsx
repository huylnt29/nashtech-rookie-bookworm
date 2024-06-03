import { HStack, Text, VStack } from "@chakra-ui/react";
import useHomeStore from "./store/home.store";
import OnSaleCollectionCard from "./on_sale_collection.card";
import RequestState from "../../../core/data/enum/request_state.enum";

const OnSaleCollectionListView = () => {
  const { onSaleCollection, requestState } = useHomeStore();
  if (requestState == RequestState.LOADED) {
    return (
      <VStack width="100%" align="start">
        <Text paddingX="18%" className="font-bold text-xl">
          On Sale
        </Text>
        <div className="flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-start mb-8 scrollbar-none">
          {onSaleCollection!.batches.map((batch) => (
            <OnSaleCollectionCard key={batch.id} {...batch} />
          ))}
        </div>
      </VStack>
    );
  } else {
    return <></>;
  }
};

export default OnSaleCollectionListView;
