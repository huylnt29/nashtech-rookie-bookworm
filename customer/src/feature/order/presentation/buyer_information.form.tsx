import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import AppContainer from "../../../core/component/container";
import AppInput from "../../../core/component/input";
import {
  GlobeEuropeAfricaIcon,
  HomeIcon,
  HomeModernIcon,
  InboxIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Spacer } from "@nextui-org/react";
import useOrderStore from "./store/order.store";

const BuyerInformationForm = () => {
  const { updateCustomer, createCustomerError } = useOrderStore();
  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Buyer information
        </Text>
      </HStack>
      <AppContainer width="100%">
        <VStack align="start">
          <Text fontSize="sm" fontWeight="bold">
            Name *
          </Text>
          <AppInput
            type={"text"}
            placeholder={"Type your preferred name"}
            value={undefined}
            leftIcon={<UserIcon />}
            focusBorderColor={"black"}
            onChange={(event) => updateCustomer("name", event.target.value)}
          />
          <Text fontSize="sm" fontWeight="bold">
            Phone *
          </Text>
          <AppInput
            type={"tel"}
            placeholder={"Please provide your phone"}
            value={undefined}
            leftIcon={<PhoneIcon />}
            focusBorderColor={"black"}
            onChange={(event) => updateCustomer("phone", event.target.value)}
          />
          <Text fontSize="sm" fontWeight="bold">
            Email
          </Text>
          <AppInput
            type={"email"}
            placeholder={"Optional but useful"}
            value={undefined}
            leftIcon={<InboxIcon />}
            focusBorderColor={"black"}
            onChange={(event) => updateCustomer("email", event.target.value)}
          />
          <Text fontSize="sm" fontWeight="bold">
            Address *
          </Text>
          <AppInput
            type={"text"}
            placeholder={"Type your address"}
            value={undefined}
            leftIcon={<GlobeEuropeAfricaIcon />}
            focusBorderColor={"black"}
            onChange={(event) => updateCustomer("address", event.target.value)}
          />
          <HStack>
            <VStack align="start">
              <Text fontSize="sm" fontWeight="bold">
                City
              </Text>
              <AppInput
                type={"text"}
                placeholder={"Type your city"}
                value={undefined}
                leftIcon={<HomeModernIcon />}
                focusBorderColor={"black"}
                onChange={(event) => updateCustomer("city", event.target.value)}
              />
            </VStack>
            <Spacer />
            <VStack align="start">
              <Text fontSize="sm" fontWeight="bold">
                District
              </Text>
              <AppInput
                type={"text"}
                placeholder={"Type your district"}
                value={undefined}
                leftIcon={<HomeIcon />}
                focusBorderColor={"black"}
                onChange={(event) =>
                  updateCustomer("district", event.target.value)
                }
              />
            </VStack>
          </HStack>
          <Text className="text-red-700 font-semibold">
            {createCustomerError}
          </Text>
        </VStack>
      </AppContainer>
    </VStack>
  );
};

export default BuyerInformationForm;
