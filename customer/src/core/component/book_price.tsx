import { Flex, Text } from "@chakra-ui/react";
import { UI } from "../util/ui.util";

export type BookPriceProps = {
  initialPrice: number;
  discountPercentage?: number;
};
const BookPrice = ({ initialPrice, discountPercentage }: BookPriceProps) => {
  if (discountPercentage) {
    return (
      <Flex gap={3} align="center">
        <Text fontSize="md" fontWeight="semibold">
          {UI.formatNumberWithDots(
            Math.round(initialPrice * discountPercentage)
          )}{" "}
          VND
        </Text>
        <Text
          fontSize="sm"
          className="text-slate-300"
          fontWeight="semibold"
          textDecoration="line-through"
        >
          {UI.formatNumberWithDots(initialPrice)} VND
        </Text>
      </Flex>
    );
  } else {
    return (
      <Text fontSize="lg" fontWeight="semibold" textDecoration="slategray">
        {UI.formatNumberWithDots(initialPrice)} VND
      </Text>
    );
  }
};

export default BookPrice;
