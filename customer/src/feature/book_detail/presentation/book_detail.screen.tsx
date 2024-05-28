import { Box, Flex } from "@chakra-ui/react";
import useBookDetailStore from "./store/book_detail.store";
import { useEffect } from "react";
import { useParams } from "react-router";

const BookDetailScreen = () => {
  const { book, fetch } = useBookDetailStore();
  const { id } = useParams();
  useEffect(() => {
    fetch(id!);
  }, []);
  return <></>;
};

export default BookDetailScreen;
