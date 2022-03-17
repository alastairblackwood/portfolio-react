import * as React from "react";
import { VStack, Code, Grid, Heading, Flex } from "@chakra-ui/react";
import { AboutCard } from "../../containers/Card";
import { AboutDescription } from "../../containers/Card/About/AboutDescription";

interface AboutProps {
  children?: React.ReactNode;
}

export const About = ({ children }: AboutProps) => {
  return (
    <Flex justifyContent="center" maxW="1200px" margin="0 auto" w="100%" p={3}>
      <VStack mt={4}>
        <AboutCard>
          <AboutDescription
            name={""}
            role={""}
            description={
              "Hi, my name is Alastair and I'm an emerging junior software engineer with a passion for React, JavaScript, NodeJS and a keen interest in the Bitcoin Lightning network. I'm skilled in designing, implementing and installing software solutions across the complete development life cycle of a product."
            }
          />
        </AboutCard>
      </VStack>
    </Flex>
  );
};
