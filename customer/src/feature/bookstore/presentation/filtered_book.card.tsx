import { useNavigate } from "react-router";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";
import { Center, Flex, Tag, Text } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import RatingStar from "../../../core/component/rating_star";
import { RouteBuilder } from "../../../core/router/route_path";
import BookPrice from "../../../core/component/book_price";
import { FilteredBatch } from "../data/model/filtered_book.type";
import { DateUtil } from "../../../core/util/date.util";

const FilteredBookCard = (filteredBatch: FilteredBatch) => {
  const navigate = useNavigate();
  const { book, discount } = filteredBatch;
  return (
    <AppContainer
      onClick={() => navigate(RouteBuilder.buildBookPath(book.id))}
      className="cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition ease-in-out"
    >
      <Flex direction="column" width="100%">
        <Center>
          <Image
            className="h-44 w-56 object-cover object-center rounded-xl"
            alt={book.name}
            src={book.imageUrls?.[0]}
            fallbackSrc="https://via.placeholder.com/300x200"
          />
        </Center>
        <Spacer y={3} />
        <Text fontSize="lg" fontWeight="semibold" className="h-14">
          {book.name.slice(0, 30).concat("...")}
        </Text>
        <Spacer y={1} />

        <Spacer y={1} />
        <RatingStar value={book.averageRating} onChange={() => {}} size={8} />
        <Spacer y={5} />
        <BookPrice
          initialPrice={filteredBatch!.price}
          discountPercentage={discount?.percentage}
        />
        <Spacer y={3} />
        <Tag colorScheme="orange" fontSize="md" width="fit-content">
          {DateUtil.isBeforeToday(new Date(filteredBatch.importedAt))
            ? `${filteredBatch.book.totalSoldQuantity} sold`
            : "Coming soon"}
        </Tag>
      </Flex>
    </AppContainer>
  );
};

export default FilteredBookCard;
