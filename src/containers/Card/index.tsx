import React from "react";
import {
  Heading,
  Avatar,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Box,
  useStyleConfig,
  Center,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

interface ICardProps {
  children: React.ReactNode;
}

export const AboutCard = (props: ICardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef<HTMLDivElement>(null);

  const { ...rest } = props;

  const styles = useStyleConfig("Card");

  return (
    <Center py={8} mt={10}>
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        __css={styles}
        {...rest}
        w={[300, 400, 500, 600]}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"sm"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Logo h="120px" w="full" />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            mb={4}
            src="https://bit.ly/35ZmT2u"
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Button onClick={onOpen}>About</Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>
              <Button colorScheme="yellow.300" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Center>
  );
};

export const PortfolioCard = (props: ICardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig("Card");

  return (
    <Flex>
      <Box w={[300, 400, 500, 600]} __css={styles} {...rest}>
        {props.children}
      </Box>
    </Flex>
  );
};

export const ContactCard = (props: ICardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig("Card");

  return (
    <Flex>
      <Box
        mt={10}
        w={[300, 400, 500, 600]}
        height="389px"
        __css={styles}
        {...rest}
      >
        {props.children}
      </Box>
    </Flex>
  );
};
