import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { CircularProgress } from "@nextui-org/react";

const LoadingModal = () => {
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
