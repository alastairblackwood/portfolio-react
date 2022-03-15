import { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Wrap,
  Heading,
  Stack,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
// import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbsDownIcon from '@material-ui/icons/ThumbDown';

interface ICommentProps {
  name: string;
  role: string;
  description: string;
}

export const ContactDescription = (props: ICommentProps) => {
  const [isVoted, setIsVoted] = useState(false);
  const [isUpVoted, setIsUpVoted] = useState(0);
  const [isDownVoted, setIsDownVoted] = useState(0);

  return (
    <Box className="funding" p={4}>
      <Stack isInline align="baseline">
        <Text textTransform="uppercase" fontSize="sm" color="white.500">
          Funding Proposal
        </Text>
        <Spacer />
        <Badge
          textTransform="uppercase"
          variant="outline"
          fontSize="sm"
          letterSpacing="wide"
          rounded="lg"
          colorScheme="green"
        ></Badge>
      </Stack>
      <Box className="proposal type">
        <Heading as="h2" fontWeight="semibold" fontSize="xl" my={2}></Heading>
      </Box>
      <Stack className="request funds">
        <Text
          isTruncated
          textTransform="uppercase"
          fontSize="sm"
          color="white.500"
        >
          Request Fund %
        </Text>
      </Stack>
    </Box>
  );
};
