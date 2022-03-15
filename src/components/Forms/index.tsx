import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [email, setEmail] = useState("");

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" type="email" />
      <FormLabel htmlFor="message">Message</FormLabel>
      <Input id="text" type="text" h={40} />
      <Button mt={10}>Send</Button>
    </FormControl>
  );
};

export default ContactForm;
