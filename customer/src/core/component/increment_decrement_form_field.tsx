import { HStack, Text } from "@chakra-ui/react";
import PrimaryButton from "./primary_button";

export type IncrementDecrementFormFieldProps = {
  onIncrement: () => void;
  value: number;
  onDecrement: () => void;
};

const IncrementDecrementFormField = (
  props: IncrementDecrementFormFieldProps
) => {
  return (
    <HStack spacing={8}>
      <PrimaryButton
        text={"-"}
        onClick={() => (props.value > 0 ? props.onDecrement() : undefined)}
        color={"primary"}
        fitContent
        isIconOnly
      />
      <Text>{props.value}</Text>
      <PrimaryButton
        text={"+"}
        onClick={props.onIncrement}
        color={"primary"}
        fitContent
        isIconOnly
      />
    </HStack>
  );
};

export default IncrementDecrementFormField;
