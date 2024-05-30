import { HStack, Text } from "@chakra-ui/react";
import { Spacer } from "@nextui-org/react";

export type RowTextProps = {
  leftText: string;
  rightText: string;
};

const RowText = (props: RowTextProps) => {
  return (
    <HStack width="100%" justify="space-between">
      <Text fontSize="md" fontWeight="semibold" className="text-slate-700">
        {props.leftText}
      </Text>
      <Spacer />
      <Text fontSize="xl" fontWeight="bold" textAlign="right">
        {props.rightText}
      </Text>
    </HStack>
  );
};

export default RowText;
