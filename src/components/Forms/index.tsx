import { useState, useRef } from "react";
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
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export const ContactForm = () => {
  const { handleSubmit } = useForm();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_sexuxlg", e.target, "20mleEMlRerUmg9wu")
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Flex mt={24}>
      <form onSubmit={sendEmail}>
        <FormControl isRequired>
          <FormLabel
            className="name"
            htmlFor="name"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Name"
          >
            Name
          </FormLabel>
          <Input id="name" type="text" />
          <FormLabel
            className="email"
            htmlFor="email"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Email"
          >
            Email
          </FormLabel>
          <Input id="message" type="text" />
          <FormLabel
            className="message"
            htmlFor="message"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Enter short message here"
          >
            Message
          </FormLabel>
          <Input id="text" type="text" h={40} />
          <Button type="submit" value="Send Message" mt={4} mb={4}>
            Send
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default ContactForm;
