import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/btc.png";
import {motion} from "framer-motion"; //it is used for animation  and take from the chakra ui

const Home = () => {
  return (
   <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
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
          filter={"grayscale(1)"}
        />
      </motion.div>
    <Text
    textAlign ={'center'}
    fontweight={"thin"}
    color={'whiteAlpha.700'}
    mt={"-15"}
    fontSize={"6xl"}
    >
     Xcrypto
    </Text>
   </Box>
  )
}

export default Home
