import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Card from "./CardStyle";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  components: {
    Card,
  },
  fonts: {
    heading: "Shadows-into-light, sans-serif",
    body: "Montserrat, sans-serif",
  },
  config,
  breakpoints,
});

export default theme;

// To use custom breakpoints, you can use the following code:
// const Example = () => {
// return (
//   <Box width={{ base: '100%', sm: '50%', md: '25%' }}>
// )
