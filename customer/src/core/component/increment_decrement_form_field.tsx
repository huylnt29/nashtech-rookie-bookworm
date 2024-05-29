import { HStack, Text } from "@chakra-ui/react";
import SecondaryButton from "./secondary_button";
import AppInput from "./input";
import PrimaryButton from "./primary_button";

export type IncrementDecrementFormFieldProps = {
  onIncrement: void;
  value: string;
  onDecrement: void;
};

const IncrementDecrementFormField = (
  props: IncrementDecrementFormFieldProps
) => {
  return (
    <HStack spacing={8}>
      <PrimaryButton
        text={"-"}
        onClick={props.onDecrement}
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
