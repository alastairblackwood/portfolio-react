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
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

interface ICardProps {
  children: React.ReactNode;
}

export const AboutCard = (props: ICardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig("Card");

  return (
    <Center py={8}>
      <Box
        __css={styles}
        {...rest}
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Logo h={"120px"} w={"full"} />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src="https://bit.ly/35ZmT2u"
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Box>{props.children}</Box>
      </Box>
    </Center>
  );
};

export const PortfolioCard = (props: ICardProps) => {
  const { ...rest } = props;

  const styles = useStyleConfig("Card");

  return (
    <Flex>
      <Box maxW="400px" w="full" __css={styles} {...rest}>
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
      <Box mt={10} w="400px" height="389px" __css={styles} {...rest}>
        {props.children}
      </Box>
    </Flex>
  );
};
