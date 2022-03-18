import * as React from "react";
import {
  Box,
  Text,
  Link,
  VStack,
  Heading,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";

const moveInLeft = keyframes`0% { opacity: 0; transform: translateX(-100px); }
100% { opacity: 1; transform: translateX(0); } }`;

const moveInRight = keyframes`0% { opacity: 0; transform: translateX(100px); }
100% { opacity: 1; transform: translateX(0); } }`;

export const Home = () => {
  const slideLeftAnimation = `${moveInLeft} 3s ease-out`;
  const slideRightAnimation = `${moveInRight} 3s ease-out`;

  return (
    <Flex justifyContent="center" maxW="1200px" margin="0 auto" w="100%" p={3}>
      <VStack spacing={2}>
        <Logo pointerEvents="none" mt={20} p={6} mb={4} />
        <Box animation={slideLeftAnimation}>
          <Heading>Alastair Blackwood</Heading>
        </Box>
        <Box animation={slideRightAnimation}>
          <Text as="h6">Junior FullStack Developer</Text>
        </Box>
      </VStack>
    </Flex>
  );
};
