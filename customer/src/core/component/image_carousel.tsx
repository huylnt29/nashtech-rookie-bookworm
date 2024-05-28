import { Flex } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";

export type ImageCarouselProps = {
  imageUrls: string[];
};

const ImageCarousel = (props: ImageCarouselProps) => {
  return (
    <Flex bg="transparent" gap={8}>
      {props.imageUrls.map((imageUrl) => (
        <Image
          key={imageUrl}
          src={imageUrl}
          className="w-96 h-48 object-cover"
        />
      ))}
    </Flex>
  );
};

export default ImageCarousel;
