import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import useBookstoreStore from "./store/bookstore.store";
import AppCheckboxGroup, {
  CheckboxOption,
} from "../../../core/component/checkbox_group";
import RequestState from "../../../core/data/enum/request_state.enum";
import AppContainer from "../../../core/component/container";
import PrimaryButton from "../../../core/component/primary_button";
import RatingStar from "../../../core/component/rating_star";
import { RouteBuilder } from "../../../core/router/route_path";

const FilterMenu = () => {
  const {
    fetchFilter,
    filterDataRequestState,
    categories,
    authors,
    filterRequest,
    updateFilterRequest,
  } = useBookstoreStore();
  const navigate = useNavigate();

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
        <AppCheckboxGroup
          options={options}
          onItemSelected={(value) => updateFilterRequest("categoryIds", value)}
        />
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
        <AppCheckboxGroup
          options={options}
          onItemSelected={(value) => updateFilterRequest("authorIds", value)}
        />
      </VStack>
    );
  };

  const buildRatingMenu = () => {
    return (
      <VStack align="start" spacing={3}>
        <Text fontSize="xl" fontWeight="semibold">
          Rating
        </Text>
        <RatingStar value={0} size={8} onChange={() => {}} />
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
          onClick={() =>
            navigate(RouteBuilder.buildStorePath(filterRequest), {
              replace: true,
            })
          }
          color={"default"}
          fitContent
        />
      </Flex>
      <AppContainer>
        <VStack align="start" spacing={5}>
          {buildCategoryMenu()}
          {buildAuthorMenu()}
          {buildRatingMenu()}
        </VStack>
      </AppContainer>
    </Flex>
  );
};

export default FilterMenu;
