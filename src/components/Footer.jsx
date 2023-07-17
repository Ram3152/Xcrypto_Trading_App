import { Avatar, Box, Stack, VStack,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"}
   px={'16'} py={["16",'8']}>
<Stack 
direction={['column','row']}
h={"full"}
alignItems={"center"}>

    <VStack w={'full '} alignItems={["center",'flex-start']}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text>
        Welcome to Xcrypto- Your Crypto Trading Partner!</Text>

<Text fontSize={"sm"} letterSpacing={"widest"} textAlign={['center','left']}>At Xcrypto, we're on a mission to revolutionize the crypto trading experience. Our user-friendly platform empowers both beginners and seasoned investors to explore the world of cryptocurrencies with confidence. Backed by cutting-edge technology and a team of experts, we prioritize security and simplicity, ensuring your assets and personal information are safe.

Join us now to embrace the future of finance and unlock endless possibilities for growth and prosperity through crypto trading. Happy trading!
        </Text>


    </VStack>
    <VStack>
        <Avatar boxSize={"28"} mt={['4','0']}/>
        <Text >
            Our Founder
        </Text>
    </VStack>
</Stack>
   </Box>
  )
}

export default Footer
