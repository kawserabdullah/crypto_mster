import { Avatar, Box, Stack, Text, VStack, border } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const avatarSrc = "https://avatars.githubusercontent.com/u/157562656?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
      css={{
        "&":{
          borderTop:"2px soild #FEEAA6"
        }
      }}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in the world, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <a target="_blank" href={'https://github.com/kawserabdullah'} >
           <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
            <Text>Our Founder</Text>
          </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
