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
  type: string;
  description: string;
}

export const PortfolioDescription = (props: ICommentProps) => {
  return (
    <Box className="about" p={4}>
      <Stack>
        <Text textTransform="uppercase" fontSize="sm" color="white.500">
          {props.name}
        </Text>
        <Spacer />
      </Stack>
      <Box className="proposal type">
        <Text fontWeight="semibold" fontSize="sm" my={2}>
          {props.type}
        </Text>
      </Box>
    </Box>
  );
};
