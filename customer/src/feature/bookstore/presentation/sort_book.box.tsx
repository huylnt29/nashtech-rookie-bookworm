import { HStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { cn, Radio, RadioGroup } from "@nextui-org/react";

const SortBookBox = () => {
  return (
    <AppContainer>
      <HStack justify="space-between">
        <RadioGroup
          label="Sort by"
          orientation="horizontal"
          classNames={{
            label: "font-bold",
          }}
        >
          <Radio
            value="buenos-aires"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            On sale
          </Radio>
          <Radio
            value="sydney"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            Popular
          </Radio>
          <Radio
            value="san-francisco"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            Price
          </Radio>
        </RadioGroup>
        <RadioGroup
          label="Order"
          orientation="horizontal"
          classNames={{
            label: "font-bold",
          }}
        >
          <Radio
            value="buenos-aires"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            Ascending
          </Radio>
          <Radio
            value="sydney"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            Descending
          </Radio>
        </RadioGroup>
      </HStack>
    </AppContainer>
  );
};

export default SortBookBox;
