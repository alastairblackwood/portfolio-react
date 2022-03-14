import { useState, useEffect } from "react";
import { Box, Heading, Stack, Text, Button, Spacer } from "@chakra-ui/react";

interface ICommentProps {
  name: string;
  role: string;
  description: string;
}

export const AboutDetail = (props: ICommentProps) => {
  return (
    <Box className="funding" p={4}>
      <Stack isInline align="baseline">
        <Text textTransform="uppercase" fontSize="sm" color="white.500">
          Description
        </Text>
        <Spacer />
      </Stack>
      <Box className="proposal type">
        <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}></Heading>
      </Box>
    </Box>
  );
};
