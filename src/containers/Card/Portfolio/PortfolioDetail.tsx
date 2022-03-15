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
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "../../Logo/Logo";

interface IAboutDetailProps {
  children: React.ReactNode;
}

export const PortfolioDetail = (props: IAboutDetailProps) => {
  return (
    <Box p={6}>
      <Stack spacing={0} align={"center"} mb={5}>
        <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
          {props.children}
        </Heading>
        <Text color={"gray.500"}>{props.children}</Text>
      </Stack>

      <Stack direction={"row"} justify={"center"} spacing={6}>
        <Stack spacing={0} align={"center"}>
          <Text fontSize="sm">{props.children}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};
