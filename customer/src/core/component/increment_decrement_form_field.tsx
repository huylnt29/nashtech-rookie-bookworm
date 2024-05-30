import { HStack, Text } from "@chakra-ui/react";
import PrimaryButton from "./primary_button";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

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
        onClick={() => (props.value > 0 ? props.onDecrement() : undefined)}
        color={"primary"}
        fitContent
        isIconOnly
        leftIcon={<MinusIcon className="w-4 h-4" />}
      />
      <Text>{props.value}</Text>
      <PrimaryButton
        onClick={props.onIncrement}
        color={"primary"}
        fitContent
        isIconOnly
        leftIcon={<PlusIcon className="w-4 h-4" />}
      />
    </HStack>
  );
};

export default IncrementDecrementFormField;
