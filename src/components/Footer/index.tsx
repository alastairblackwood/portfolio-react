import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box mb={10} position="sticky" bottom="0">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={10} mb={4}>
          <SocialButton
            label="GitHub"
            href={"https://github.com/alastairblackwood"}
          >
            <FaGithub size="50px" />
          </SocialButton>
          <SocialButton
            label="LinkedIn"
            href={"https://www.linkedin.com/in/alastair-blackwood-1262888a/"}
          >
            <FaLinkedin size="50px" />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter size="50px" />
          </SocialButton>
        </Stack>
        <Text
          color="yellow.300"
          fontSize="sm"
          fontWeight="semibold"
          textTransform="capitalize"
        >
          © 2022 Alastair Blackwood. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}

// for the footer, you need a container that contains the nav div and body div, and have that container to have a height of 100vh - the height of navbar. so that it pushes the footer down to the bottom.

// for the width of the page, say pageContainer Flex, have it width=100% , maxW='1200px', margin='0 auto'. so that it stays in the middle even the screen is super wide

// for breakpoint, create a enum for the screen sizes, then in chakra theme.ts, add in the breakpoints.
