import { HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import useHomeStore from "./store/home.store";
import RequestState from "../../../core/data/enum/request_state.enum";
import AppContainer from "../../../core/component/container";
import { CollectionBatch } from "../data/model/collection_batch.type";
import RatingStar from "../../../core/component/rating_star";
import BookPrice from "../../../core/component/book_price";
import { RouteBuilder } from "../../../core/router/route_path";
import { useNavigate } from "react-router";
import { FireIcon } from "@heroicons/react/24/solid";

const OnSaleCollectionListView = () => {
  const { onSaleCollection, requestState } = useHomeStore();
  if (requestState == RequestState.LOADED) {
    return (
      <VStack width="100%" align="start" spacing={5}>
        <HStack paddingX="18%">
          <Text fontSize="3xl" fontWeight="bold">
            On Sale
          </Text>
          <FireIcon className="w-8 h-8 text-red-900" />
        </HStack>
        <div className="flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-start mb-8 scrollbar-none">
          {onSaleCollection!.batches.map((batch) => (
            <OnSaleCollectionItemCard key={crypto.randomUUID()} {...batch} />
          ))}
        </div>
      </VStack>
    );
  } else {
    return <></>;
  }
};

const OnSaleCollectionItemCard = (collectionBatch: CollectionBatch) => {
  const { book } = collectionBatch;
  const navigate = useNavigate();
  return (
    <AppContainer
      className="flex-none mr-8 cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition ease-in-out"
      onClick={() => navigate(RouteBuilder.buildBookPath(book.id))}
    >
      <HStack spacing={8}>
        <Image
          src={book.imageUrls[0]}
          className="w-32 min-w-[128px] h-44 object-cover"
        />
        <VStack align="start">
          <Text fontSize="lg" fontWeight="semibold" maxWidth="15vw">
            {book.name}
          </Text>
          <RatingStar value={book.averageRating} onChange={() => {}} size={8} />
          <BookPrice
            initialPrice={collectionBatch!.price}
            discountPercentage={collectionBatch.discount?.percentage}
          />
          <Text
            fontWeight="semibold"
            maxWidth="15vw"
            className="text-orange-900"
          >
            Only{" "}
            {collectionBatch.initialQuantity - collectionBatch.soldQuantity}{" "}
            remaining
          </Text>
        </VStack>
      </HStack>
    </AppContainer>
  );
};

export default OnSaleCollectionListView;
