import { HStack } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import { cn, Radio, RadioGroup } from "@nextui-org/react";
import useBookstoreStore from "./store/bookstore.store";
import RequestState from "../../../core/data/enum/request_state.enum";

const SortBookBox = () => {
  const { filterRequest, booksResultRequestState, updateFilterRequest } =
    useBookstoreStore();
  if (booksResultRequestState != RequestState.LOADED) return <></>;

  return (
    <AppContainer>
      <HStack justify="space-between">
        <RadioGroup
          label="Sort by"
          orientation="horizontal"
          classNames={{
            label: "font-bold",
          }}
          defaultValue={filterRequest.sortBy}
          onChange={(event) =>
            updateFilterRequest("sortBy", event.target.value)
          }
        >
          <Radio
            value="sale"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            On sale
          </Radio>
          <Radio
            value="popular"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
          >
            Popular
          </Radio>
          <Radio
            value="price"
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
          defaultValue={filterRequest.sortDirection}
          classNames={{
            label: "font-bold",
          }}
          onChange={(event) =>
            updateFilterRequest("sortDirection", event.target.value)
          }
        >
          <Radio
            value="asc"
            classNames={{
              control: cn("bg-slate-900 border border-slate-900"),
            }}
            defaultChecked
          >
            Ascending
          </Radio>
          <Radio
            value="desc"
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
