import { Center, Flex, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";
import ReactStars from "react-rating-star-with-type";
import RatingStar from "../../../core/component/rating_star";
import { UI } from "../../../core/util/ui.util";

type FilteredBookCardProps = {
  id: number;
  imageUrls: string[];
  name: string;
  price: number;
  discountPercentage: number | undefined;
  totalSoldQuantity: number;
  averageRating: number;
};

const FilteredBookCard = (props: FilteredBookCardProps) => {
  const buildPrice = () => {
    if (props.discountPercentage) {
      return (
        <Flex gap={3} align="center">
          <Text fontSize="xl" fontWeight="semibold">
            {UI.formatNumberWithDots(props.price * props.discountPercentage)}{" "}
            VND
          </Text>
          <Text
            fontSize="lg"
            className="text-slate-300"
            fontWeight="semibold"
            textDecoration="line-through"
          >
            {UI.formatNumberWithDots(props.price)} VND
          </Text>
        </Flex>
      );
    } else {
      return (
        <Text fontSize="xl" fontWeight="semibold" textDecoration="slategray">
          {UI.formatNumberWithDots(props.price)} VND
        </Text>
      );
    }
  };
  return (
    <AppContainer className="cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition ease-in-out">
      <Flex direction="column" width="100%">
        <Center>
          <Image
            className="h-56 w-96 object-cover object-center rounded-xl"
            alt={props.name}
            src={props.imageUrls?.[0]}
            fallbackSrc="https://via.placeholder.com/300x200"
          />
        </Center>
        <Spacer y={3} />
        <Text fontSize="lg" fontWeight="semibold">
          {props.name}
        </Text>
        <Spacer y={1} />
        <Text fontSize="md">{props.totalSoldQuantity} sold</Text>
        <Spacer y={1} />
        <RatingStar value={0} />
        <Spacer y={5} />
        {buildPrice()}
      </Flex>
    </AppContainer>
  );
};

export default FilteredBookCard;