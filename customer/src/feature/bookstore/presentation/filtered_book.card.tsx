import { Center, Flex, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";
import RatingStar from "../../../core/component/rating_star";
import { UI } from "../../../core/util/ui.util";
import { RouteBuilder } from "../../../core/router/route_path";
import { useNavigate } from "react-router";
import BookPrice from "../../../core/component/book_price";

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
  const navigate = useNavigate();

  return (
    <AppContainer
      onClick={() => navigate(RouteBuilder.buildBookPath(props.id))}
      className="cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition ease-in-out"
    >
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
        <Text fontSize="lg" fontWeight="semibold" className="h-14">
          {props.name}
        </Text>
        <Spacer y={1} />
        <Text fontSize="md">{props.totalSoldQuantity} sold</Text>
        <Spacer y={1} />
        <RatingStar value={props.averageRating} onChange={() => {}} size={8} />
        <Spacer y={5} />
        <BookPrice
          initialPrice={props!.price}
          discountPercentage={props!.discountPercentage}
        />
      </Flex>
    </AppContainer>
  );
};

export default FilteredBookCard;
