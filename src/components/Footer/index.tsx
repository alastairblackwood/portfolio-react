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
    <Box>
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
            <FaGithub size={"xl"} />
          </SocialButton>
          <SocialButton
            label="LinkedIn"
            href={"https://www.linkedin.com/in/alastair-blackwood-1262888a/"}
          >
            <FaLinkedin size={"xl"} />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter size={"xl"} />
          </SocialButton>
        </Stack>
        <Text color="yellow.300" fontSize="sm" fontWeight="semibold">
          © 2022 Alastair Blackwood. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
