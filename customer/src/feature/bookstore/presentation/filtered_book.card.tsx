import { Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";

type FilteredBookCardProps = {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
};

const FilteredBookCard = (props: FilteredBookCardProps) => {
  return (
    <AppContainer height={96}>
      <Image
        className="h-56 object-cover object-center rounded-xl"
        alt={props.name}
        src={props.imageUrls?.[0]}
        fallbackSrc="https://via.placeholder.com/300x200"
      />
      <Spacer y={3} />
      <Text fontSize="lg" fontWeight="semibold">
        {props.name}
      </Text>
    </AppContainer>
  );
};

export default FilteredBookCard;
