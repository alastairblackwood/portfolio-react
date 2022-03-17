import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Reaptcha from "reaptcha";

const siteKey = `${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;

export const ContactForm = () => {
  const [verified, setVerified] = useState(false);
  const { handleSubmit, formState } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oigunbg",
        "template_sexuxlg",
        e.target,
        "20mleEMlRerUmg9wu"
      )
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

  const onVerify = (e: any) => {
    setVerified(true);
  };

  return (
    <Flex mt={24}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel
            className="name"
            htmlFor="from_name"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Name"
          >
            Name
          </FormLabel>
          <Input type="text" name="name" />
          <FormLabel
            className="email"
            htmlFor="email"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Email"
          >
            Email
          </FormLabel>
          <Input type="email" name="email" />
          <FormLabel
            className="message"
            htmlFor="message"
            color="yellow.300"
            fontWeight="semibold"
            placeholder="Enter short message here"
          >
            Message
          </FormLabel>
          <Input type="text" name="message" h={40} />

          <Button type="submit" value="Send" mt={4} mb={4}>
            Submit
          </Button>
        </FormControl>
        {/* <Reaptcha siteKey={siteKey} onVerify={onVerify} /> */}
      </form>
    </Flex>
  );
};

export default ContactForm;
