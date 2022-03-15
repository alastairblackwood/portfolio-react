import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Flex alignItems="center">
        <Box mr={4}>
          <Heading>
            <Link href="/" color="yellow.300" fontSize="lg">
              Home
            </Link>
          </Heading>
        </Box>
        <Box mr={4}>
          <Heading>
            <Link href="/about" color="yellow.300" fontSize="lg">
              About
            </Link>
          </Heading>
        </Box>
        <Box mr={4}>
          <Heading>
            <Link href="/portfolio" color="yellow.300" fontSize="lg">
              Portfolio
            </Link>
          </Heading>
        </Box>
        <Box mr={4}>
          <Heading>
            <Link href="/contact" color="yellow.300" fontSize="lg">
              Contact
            </Link>
          </Heading>
        </Box>
      </Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Navbar;
