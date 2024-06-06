import { Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Image, Spacer } from "@nextui-org/react";
import AppContainer from "../../../core/component/container";
import { CollectionBatch } from "../data/model/collection_batch.type";
import RatingStar from "../../../core/component/rating_star";
import { RouteBuilder } from "../../../core/router/route_path";
import { useNavigate } from "react-router";
import { Collection } from "../data/model/collection.type";

const DynamicCollection = (collection: Collection) => {
  return (
    <VStack paddingX="18%" width="100%" align="start" marginBottom={8}>
      <Text fontSize="3xl" fontWeight="bold">
        {collection.name}
      </Text>
      <Text fontSize="sm" fontWeight="semibold">
        {collection.description}
      </Text>
      <Spacer y={3} />
      <Grid
        className="md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        rowGap={8}
        columnGap={8}
      >
        {collection!.batches.map((batch) => (
          <DynamicCollectionItemCard key={batch.id} {...batch} />
        ))}
      </Grid>
    </VStack>
  );
};

const DynamicCollectionItemCard = (collectionBatch: CollectionBatch) => {
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

export default DynamicCollection;
