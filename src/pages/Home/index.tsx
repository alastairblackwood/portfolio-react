import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import SmallWithSocial from "../../components/Footer";
import Footer from "../../components/Footer";

export const Home = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" p={3}>
      <VStack spacing={2}>
        <Logo h="60vmin" pointerEvents="none" mt={20} mb={4} />

        <Heading>Alastair Blackwood</Heading>
        <Text as="h6">Junior FullStack Developer</Text>
      </VStack>
      <Footer />
    </Grid>
  </Box>
);
