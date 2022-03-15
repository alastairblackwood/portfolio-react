import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ContactCard } from "../../containers/Card";
import { ContactDescription } from "../../containers/Card/Contact/ContactDescription";

export const Contact = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <ContactCard>
          <ContactDescription
            name={"DAO App"}
            role={`alastair.blackwood@icloud.com`}
            description={"0405 792 855"}
          />
        </ContactCard>
        <Heading>Alastair Blackwood</Heading>
      </VStack>
      <Footer />
    </Grid>
  </Box>
);
