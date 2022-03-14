import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import SmallWithSocial from "../../components/Footer";
import { AboutCard } from "../../containers/Card";
import { AboutDescription } from "../../containers/Card/AboutDescription";

interface AboutProps {
  children?: React.ReactNode;
}

export const About = ({ children }: AboutProps) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <AboutCard>
            <AboutDescription
              name={"Alastair Blackwood"}
              role={`Junior FullStack Developer`}
              description={
                "Emerging junior software engineer with a passion for React, JavaScript, NodeJS and a keen interest in the Bitcoin Lightning network. Highly skilled in designing, implementing and installing software solutions across the complete development life cycle of a product. Adept at developing various tools &applications by producing clean and efficient code including integration testing. Skilled in React, JavaScript, NodeJS, Typescript, Ruby, Ruby-on-Rails, MongoDB, Mongoose, Express, HTML & CSS."
              }
            />
          </AboutCard>
        </VStack>
        <SmallWithSocial />
      </Grid>
    </Box>
  );
};
