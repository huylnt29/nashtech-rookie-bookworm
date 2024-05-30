import { Text, VStack } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";

export type AnnouncementProps = {
  imagePath: string;
  text: string;
  height?: string | "full";
};

const Announcement = (props: AnnouncementProps) => {
  return (
    <VStack spacing={8}>
      <Image
        src={props.imagePath}
        className={`object-cover object-center h-${props.height}`}
      />
      <Text fontWeight="semibold" textAlign="center">
        {props.text}
      </Text>
    </VStack>
  );
};

export default Announcement;
