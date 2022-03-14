import { extendTheme } from "@chakra-ui/react";
import Card from "./CardStyle";

const theme = extendTheme({
  components: {
    Card,
  },
  fonts: {
    heading: "Shadows-into-light, sans-serif",
    body: "Montserrat, sans-serif",
  },
});

export default theme;
