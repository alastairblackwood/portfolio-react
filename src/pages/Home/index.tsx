import * as React from "react";
import { Box, Text, Link, VStack, Heading, Flex } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";

export const Home = () => (
  <Flex
    justifyContent="center"
    minH="100vh"
    maxW="1200px"
    margin="0 auto"
    w="100%"
    p={3}
  >
    <VStack spacing={2}>
      <Logo h="60vmin" pointerEvents="none" mb={4} p={6} />

      <Heading>Alastair Blackwood</Heading>
      <Text as="h6">Junior FullStack Developer</Text>
    </VStack>
  </Flex>
);
