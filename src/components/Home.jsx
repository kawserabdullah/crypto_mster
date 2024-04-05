import { Box, Image, Text, border, filter, transition } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}

          css={{
           " &":{
            maxWidth: "500px",
            marginInline: "auto",
            filter: "grayscale(1)",
            transition: "all 0.6s ease",
            borderRadius:"50%"
           },

            "&:hover": {
              filter: "grayscale(0)",
            },
          }}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        CRYPTO TRACKER
      </Text>
    </Box>
  );
};

export default Home;
