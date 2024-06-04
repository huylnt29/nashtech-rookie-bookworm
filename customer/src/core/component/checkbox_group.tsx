import { VStack } from "@chakra-ui/react";
import { Checkbox } from "@nextui-org/checkbox";

type AppCheckboxGroupProps = {
  options: CheckboxOption[];
  onItemSelected: (value: string) => void;
};

export type CheckboxOption = {
  key: string;
  value: string;
};

const AppCheckboxGroup = ({
  options,
  onItemSelected,
}: AppCheckboxGroupProps) => {
  return (
    <VStack align="start" spacing={3}>
      {options.map((option) => (
        <Checkbox
          key={option.key}
          value={option.key}
          onChange={(event) => onItemSelected(event?.target.value)}
        >
          {option.value}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default AppCheckboxGroup;
