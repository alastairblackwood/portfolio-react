import { useState, useRef } from "react";
import {
  Flex,
  Link,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex>
      <Flex align="center" position="fixed" top="1rem" right="1rem">
        {/* Desktop */}

        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="/" style={{ textDecoration: "none" }}>
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

          <Link href="/about" style={{ textDecoration: "none" }}>
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

          <Link href="/contact" style={{ textDecoration: "none" }}>
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
        {/* <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent> */}

        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>

      {/* Mobile Content - Dropdown from hamburger menu */}
      <Flex
        display={display}
        w="52vw"
        h="47vh"
        top="0"
        justifyContent="center"
        mt={5}
        ml={2}
        pr={8}
        bg="gray.900"
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
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about" style={{ textDecoration: "none" }}>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/portfolio" style={{ textDecoration: "none" }}>
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

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
        {/* <DrawerCloseButton />
        </DrawerContent>
        
        </Drawer> */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
