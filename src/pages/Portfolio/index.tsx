import * as React from "react";
import { Link, VStack, Heading, Flex } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PortfolioCard } from "../../containers/Card";
import { PortfolioDescription } from "../../containers/Card/Portfolio/PortfolioDescription";

export const Portfolio = () => (
  <Flex justifyContent="center" maxW="1200px" margin="0 auto" w="100%" p={3}>
    <VStack spacing={8}>
      <Heading color="yellow.300" size="lg" mt={16}>
        Portfolio
      </Heading>
      <Link href="https://github.com/alastairblackwood/dao-app">
        <PortfolioCard>
          <PortfolioDescription
            name={"SuperDao"}
            type={"Full Stack Application using MERN stack"}
            description={""}
          ></PortfolioDescription>
        </PortfolioCard>
      </Link>
      <Link href="https://wesandersonfilmfestival.netlify.app">
        <PortfolioCard>
          <PortfolioDescription
            name={"Wes Anderson Film Festival"}
            type={"Full-stack film festival application using MERN stack"}
            description={""}
          ></PortfolioDescription>
        </PortfolioCard>
      </Link>
      <Link
        href="
https://guarded-fortress-44138.herokuapp.com"
      >
        <PortfolioCard>
          <PortfolioDescription
            name={"QUart Marketplace"}
            type={
              "Two-sided marketplace application using Ruby & Ruby-on-Rails"
            }
            description={""}
          ></PortfolioDescription>
        </PortfolioCard>
      </Link>
      <Link href="https://github.com/alastairblackwood/ROR-T1A3">
        <PortfolioCard>
          <PortfolioDescription
            name={"Ranger Of Redoc"}
            type={"Classic 80s style command line game using Ruby"}
            description={""}
          ></PortfolioDescription>
        </PortfolioCard>
      </Link>
    </VStack>
  </Flex>
);
