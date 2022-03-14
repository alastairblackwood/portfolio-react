import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import SmallWithSocial from "../../components/Footer";
import { AboutCard } from "../../containers/Card";

export const Portfolio = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <AboutCard children={undefined} />
        <Heading>Alastair Blackwood</Heading>
      </VStack>
      <SmallWithSocial />
    </Grid>
  </Box>
);
