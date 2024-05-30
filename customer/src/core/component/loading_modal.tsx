import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { CircularProgress } from "@nextui-org/react";

const LoadingModal = ({ onClose }: any) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen
      onClose={() => undefined}
      isCentered
      size="xs"
    >
      <ModalOverlay />
      <ModalContent alignItems="center">
        <ModalBody pb={6}>
          <CircularProgress
            label="Loading..."
            color="default"
            size="lg"
            className="font-bold"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoadingModal;
