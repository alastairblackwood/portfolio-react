import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

const ContactForm = () => {
  const { handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    if (!data.email || !data.message) {
      return "Please enter your email and message";
    }
    console.log(data);
  };

  return (
    <Flex mt={24}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel htmlFor="email" color="yellow.300" fontWeight="semibold">
            Email
          </FormLabel>
          <Input id="email" type="email" />
          <FormLabel htmlFor="message" color="yellow.300" fontWeight="semibold">
            Message
          </FormLabel>
          <Input id="text" type="text" h={40} />
          <Button type="submit" mt={4} mb={4}>
            Send
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default ContactForm;
