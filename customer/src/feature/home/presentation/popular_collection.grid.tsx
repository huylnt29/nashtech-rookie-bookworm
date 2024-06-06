import { Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import useHomeStore from "./store/home.store";
import RequestState from "../../../core/data/enum/request_state.enum";
import AppContainer from "../../../core/component/container";
import { CollectionBatch } from "../data/model/collection_batch.type";
import RatingStar from "../../../core/component/rating_star";
import { RouteBuilder } from "../../../core/router/route_path";
import { useNavigate } from "react-router";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const PopularCollectionGrid = () => {
  const { popularCollection, requestState } = useHomeStore();
  if (requestState == RequestState.LOADED) {
    return (
      <VStack
        paddingX="18%"
        width="100%"
        align="start"
        spacing={5}
        marginBottom={8}
      >
        <HStack>
          <Text fontSize="3xl" fontWeight="bold">
            Popular
          </Text>
          <ArrowTrendingUpIcon className="w-8 h-8 text-purple-900" />
        </HStack>
        <Grid
          className="md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          rowGap={8}
          columnGap={8}
        >
          {popularCollection!.batches.map((batch) => (
            <PopularCollectionItemCard key={crypto.randomUUID()} {...batch} />
          ))}
        </Grid>
      </VStack>
    );
  } else {
    return <></>;
  }
};

const PopularCollectionItemCard = (collectionBatch: CollectionBatch) => {
  const { book } = collectionBatch;
  const navigate = useNavigate();
  return (
    <AppContainer
      width="295px"
      className="min-w-[250px] cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition ease-in-out"
      onClick={() => navigate(RouteBuilder.buildBookPath(book.id))}
    >
      <HStack spacing={8}>
        <Image
          src={book.imageUrls[0]}
          className="w-24 min-w-[96px] h-32 object-cover"
        />
        <VStack align="start">
          <Text fontSize="base" fontWeight="semibold" maxWidth="15vw">
            {book.name}
          </Text>
          <RatingStar value={book.averageRating} onChange={() => {}} size={5} />
          <Text fontSize="sm" fontWeight="semibold">
            {book.totalSoldQuantity} sold
          </Text>
        </VStack>
      </HStack>
    </AppContainer>
  );
};

export default PopularCollectionGrid;
