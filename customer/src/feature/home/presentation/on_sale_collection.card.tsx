import { HStack, Text, VStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Image } from "@nextui-org/react";
import { CollectionBatch } from "../data/model/collection_batch.type";

const OnSaleCollectionCard = (collectionBatch: CollectionBatch) => {
  const { book } = collectionBatch;
  return (
    <AppContainer width="30vw" className="flex-none mr-8 border rounded-lg">
      <HStack spacing={8}>
        <Image src={book.imageUrls[0]} className="w-32 h-44 object-cover" />
        <VStack>
          <Text>{book.name}</Text>
        </VStack>
      </HStack>
    </AppContainer>
  );
};

export default OnSaleCollectionCard;
