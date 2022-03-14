import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

interface ICardProps {
  children: React.ReactNode;
}

export const AboutCard = (props: ICardProps) => {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
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
            src={"https://bit.ly/35ZmT2u"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Alastair Blackwood
            </Heading>
            <Text color={"gray.500"}>FullStack Developer</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize="sm">
                Emerging junior software engineer with a passion for React,
                JavaScript, NodeJS and a keen interest in the Bitcoin Lightning
                network. Highly skilled in designing, implementing and
                installing software solutions across the complete development
                life cycle of a product. Adept at developing various tools &
                applications by producing clean and efficient code including
                integration testing. Skilled in React, JavaScript, NodeJS,
                Typescript, Ruby, Ruby-on-Rails, MongoDB, Mongoose, Express,
                HTML & CSS.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};
