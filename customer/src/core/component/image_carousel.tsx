import { Flex } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";

export type ImageCarouselProps = {
  imageUrls: string[];
};

const ImageCarousel = (props: ImageCarouselProps) => {
  return (
    <Flex bg="transparent" gap={8} flexWrap="wrap">
      {props.imageUrls.map((imageUrl) => {
        return (
          <Image
            key={imageUrl}
            src={imageUrl}
            className="w-48 h-72 object-cover object-center border"
          />
        );
      })}
    </Flex>
  );
};

export default ImageCarousel;
