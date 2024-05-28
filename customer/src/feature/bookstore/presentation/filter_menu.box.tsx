import { useEffect } from "react";
import useBookstoreStore from "./store/bookstore.store";
import { Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import AppCheckboxGroup, {
  CheckboxOption,
} from "../../../core/component/checkbox_group";
import RequestState from "../../../core/data/enum/request_state.enum";
import AppContainer from "../../../core/component/container";
import PrimaryButton from "../../../core/component/primary_button";
import { CiAirportSign1 } from "react-icons/ci";

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
    <Flex direction="column" width="100%" gap={4}>
      <Flex align="center">
        <Text fontWeight="semibold">Filter for what you need</Text>
        <Spacer />
        <PrimaryButton
          text="Apply"
          onClick={undefined}
          colorScheme="slate"
          color={"default"}
        />
      </Flex>
      <AppContainer>
        <VStack align="start" spacing={5}>
          {buildCategoryMenu()}
          {buildAuthorMenu()}
        </VStack>
      </AppContainer>
    </Flex>
  );
};

export default FilterMenu;
