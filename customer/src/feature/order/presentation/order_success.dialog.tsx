import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
  VStack,
  ModalFooter,
} from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import PrimaryButton from "../../../core/component/primary_button";
import { RoutePath } from "../../../core/router/route_path";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Announcement from "../../../core/component/announcement";

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
            <Announcement
              imagePath="/illustration_order_success.svg"
              text="You will be informed about the order status via the phone you have
              provided us. Happy reading!"
              height="44"
            />
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
