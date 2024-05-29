import { VStack, HStack, Text, Box } from "@chakra-ui/react";

const BuyerInformationForm = () => {
  return (
    <VStack align="start" width="100%">
      <HStack>
        <Box className="px-1 py-3 bg-slate-600 mr-3 rounded"> </Box>
        <Text fontSize="xl" fontWeight="bold">
          Buyer information
        </Text>
      </HStack>
    </VStack>
  );
};

export default BuyerInformationForm;
