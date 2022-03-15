import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ContactCard } from "../../containers/Card";
import { ContactDescription } from "../../containers/Card/Contact/ContactDescription";
import ContactForm from "../../components/Forms";

export const Contact = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" maxW="1200px" margin="0 auto" w="100%" p={3}>
      <VStack spacing={2}>
        <Heading size="md" textTransform="capitalize"></Heading>
        <Box mt={10}>
          <ContactForm />
        </Box>
        <Heading>Alastair Blackwood</Heading>
        <Text as="h6">Junior FullStack Developer</Text>
      </VStack>
    </Grid>
    <Footer />
  </Box>
);
