import { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Wrap,
  Heading,
  Stack,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";

interface ICommentProps {
  name: string;
  role: string;
  description: string;
}

export const AboutDescription = (props: ICommentProps) => {
  return (
    <Box className="about" p={4}>
      <Stack>
        <Text textTransform="uppercase" fontSize="sm" color="white.500">
          About Me
        </Text>
        <Spacer />
      </Stack>
      <Box className="proposal type">
        <Text fontWeight="semibold" fontSize="sm" my={2}>
          {props.description}
        </Text>
      </Box>
    </Box>
  );
};
