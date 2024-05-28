import { useEffect } from "react";
import useBookstoreStore from "./store/bookstore.store";
import { HStack, Text, VStack } from "@chakra-ui/react";
import AppCheckboxGroup, {
  CheckboxOption,
} from "../../../core/component/checkbox_group";
import RequestState from "../../../core/data/enum/request_state.enum";
import AppContainer from "../../../core/component/container";

const FilterMenu = () => {
  const { fetchFilter, filterDataRequestState, categories, authors } =
    useBookstoreStore();

  useEffect(() => {
    fetchFilter();
  }, []);

  const buildCategoryMenu = () => {
    if (filterDataRequestState != RequestState.LOADED) return <></>;
    const options: CheckboxOption[] = categories.map((e) => ({
      key: e.id.toString(),
      value: e.name,
    }));
    return (
      <VStack align="start" spacing={3}>
        <Text fontSize="xl" fontWeight="semibold">
          Category
        </Text>
        <AppCheckboxGroup options={options} />
      </VStack>
    );
  };

  const buildAuthorMenu = () => {
    if (filterDataRequestState != RequestState.LOADED) return <></>;
    const options: CheckboxOption[] = authors.map((e) => ({
      key: e.id.toString(),
      value: e.name,
    }));
    return (
      <VStack align="start" spacing={3}>
        <Text fontSize="xl" fontWeight="semibold">
          Author
        </Text>
        <AppCheckboxGroup options={options} />
      </VStack>
    );
  };

  return (
    <AppContainer>
      <VStack align="start" spacing={5}>
        {buildCategoryMenu()}
        {buildAuthorMenu()}
      </VStack>
    </AppContainer>
  );
};

export default FilterMenu;
