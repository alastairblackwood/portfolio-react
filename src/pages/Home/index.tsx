import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import SmallWithSocial from "../../components/Footer";

export const Home = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Logo h="60vmin" pointerEvents="none" mt={20} mb={4} />
        <Link
          color="yellow.300"
          href="https://chakra-ui.com"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Heading>Alastair Blackwood</Heading>
        </Link>
      </VStack>
      <SmallWithSocial />
    </Grid>
  </Box>
);
