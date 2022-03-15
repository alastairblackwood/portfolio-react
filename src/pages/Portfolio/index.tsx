import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../../containers/Logo/Logo";
import Navbar from "../../components/Navbar";
import SmallWithSocial from "../../components/Footer";
import { PortfolioCard } from "../../containers/Card";
import { PortfolioDescription } from "../../containers/Card/Portfolio/PortfolioDescription";

export const Portfolio = () => (
  <Box textAlign="center" fontSize="xl">
    <Navbar />
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Heading>Portfolio</Heading>
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
      <SmallWithSocial />
    </Grid>
  </Box>
);
