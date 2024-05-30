import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
  Center,
  VStack,
  ModalFooter,
} from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import PrimaryButton from "../../../core/component/primary_button";
import { RoutePath } from "../../../core/router/route_path";
import { useNavigate } from "react-router";
import { BuildingStorefrontIcon, HomeIcon } from "@heroicons/react/24/outline";

const OrderSuccessDialog = () => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen
      onClose={() => undefined}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent alignItems="center">
        <ModalHeader>Your order has been placed</ModalHeader>
        <ModalBody pb={6}>
          <VStack spacing={8}>
            <Image
              src="/illustration_order_success.svg"
              className="w-24 object-cover object-center"
            />
            <Text textAlign="center">
              You will be informed about the order status via the phone you have
              provided us. Happy reading!
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton
            text="Continue exploring"
            leftIcon={<BuildingStorefrontIcon className="w-6 h-6" />}
            onClick={() => (location.href = RoutePath.HOME)}
            color={"default"}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderSuccessDialog;
