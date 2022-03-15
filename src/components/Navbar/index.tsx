import { useState } from "react";
import { Box, Flex, Link, Button, IconButton, Switch } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  return (
    <Flex>
      <Flex align="center" position="fixed" top="1rem" right="1rem">
        {/* Desktop */}

        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              color="yellow.300"
            >
              Home
            </Button>
          </Link>

          <Link href="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/portfolio">
            <Button
              as="a"
              variant="ghost"
              aria-label="Portfolio"
              my={5}
              w="100%"
              color="yellow.300"
            >
              Portfolio
            </Button>
          </Link>

          <Link href="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => setDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>

      {/* Mobile Content */}
      <Flex
        display={display}
        w="52vw"
        h="47vh"
        top="0"
        justifyContent="center"
        mt={5}
        ml={2}
        pr={8}
        bg="black"
        opacity={0.9}
        rounded="lg"
        zIndex={20}
        pos="fixed"
        left="22%"
        overflowY="auto"
        flexDir="row"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="sm"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/portfolio">
            <Button
              as="a"
              variant="ghost"
              aria-label="Portfolio"
              my={5}
              w="100%"
            >
              Portfolio
            </Button>
          </Link>

          <Link href="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
