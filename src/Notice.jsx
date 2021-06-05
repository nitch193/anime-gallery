import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';

export default function Notice() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button margin={'1rem'} onClick={onOpen}>
        Notice
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Impertant Notice</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="lg">
            For loading more Images for each category wait for one minute and
            then after refresh it will load a different set of 48 images for
            each category. Also if you get "server error wait for one minute and
            then refresh the page"
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
